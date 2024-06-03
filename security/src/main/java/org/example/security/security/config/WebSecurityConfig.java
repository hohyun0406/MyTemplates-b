package org.example.security.security.config;

import lombok.RequiredArgsConstructor;
import org.example.security.security.exception.AccessDecisionManagerAuthorizationManagerAdapter;
import org.example.security.security.exception.RoleHierarchyService;
import org.example.security.security.exception.UserLoginFailureHandler;
import org.example.security.security.exception.UserLoginSuccessHandler;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;

import jakarta.servlet.DispatcherType;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@Configuration
public class WebSecurityConfig extends WebSecurityConfiguration {
    private final UserLoginSuccessHandler loginSuccessHandler;
    private final UserLoginFailureHandler loginFailureHandler;

    private final AccessDecisionManagerAuthorizationManagerAdapter authorizationManager;

    private final RoleHierarchyService roleHierarchyService;    //권한 처리

    @Bean
    PasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager manager() throws Exception{
        return null;
    }

    @Bean
    ModelMapper mapper(){
        return new ModelMapper();
    }

    @PostConstruct
    public void init() {
//        // spring hierarchy 관련 셋팅
//        roleHierarchyService.resetRoleHierarchyData();
    }

    @Bean
    public WebSecurityCustomizer configure() {
        return web -> web.ignoring().requestMatchers(SECURITY_EXCLUDE_PATTERN_ARR);
    }

    @Bean
    public SecurityFilterChain userFilterChain(HttpSecurity http) throws Exception {
        http
                .securityMatcher("/user/**")    // */
                .authorizeHttpRequests(authorize -> authorize
                                .dispatcherTypeMatchers(DispatcherType.FORWARD, DispatcherType.ERROR).permitAll()
                                .anyRequest().access(authorizationManager)
//              .anyRequest().authenticated()
                )
                .csrf(AbstractHttpConfigurer::disable) // CSRF OFF
                .formLogin(formLogin -> formLogin
                        .loginPage("/user/login").permitAll()
                        .defaultSuccessUrl("/user/main")
                        .loginProcessingUrl("/user/login/loginUser")
                        .successHandler(loginSuccessHandler)
                        .failureHandler(loginFailureHandler)
                        .usernameParameter("empId")
                        .passwordParameter("passWd")
                )
                .logout(logout -> logout
                        .logoutUrl("/user/logout")
                        .logoutSuccessUrl("/user/login")
                )
                .exceptionHandling(e -> e.accessDeniedPage("/error/notAuth"))
        ;

        http.headers(header -> header
                .frameOptions(HeadersConfigurer.FrameOptionsConfig::sameOrigin)
                .httpStrictTransportSecurity(hstsConfig -> hstsConfig
                        .includeSubDomains(true)
                        .maxAgeInSeconds(3600)
                )
        );

        http.sessionManagement(session -> session
                .sessionFixation()
                .changeSessionId()
                .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
                .maximumSessions(1)
                .maxSessionsPreventsLogin(false)
                .expiredSessionStrategy(sessionInformationExpiredStrategy)
                .sessionRegistry(springSessionBackedSessionRegistry)
        );

        return http.build();
    }
}
