package org.example.security.user.domain;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import java.io.Serializable;
import java.util.*;

@Entity @Data
@Table(name = "users")
public class UserModel implements Serializable , UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long userId ;
    String username;
    String firstName ;
    String lastName ;
    String email;
    String password ;
    //Un utilisateur peut avoir plusieurs roles
    @ManyToMany(fetch = FetchType.EAGER  , cascade = CascadeType.PERSIST)
    List <RoleModel> roles ;
    public UserModel (String email , String password , List<RoleModel> roles) {
        this.email= email ;
        this.password=password ;
        this.roles=roles ;}
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        this.roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getRoleName())));
        return authorities;
    }
    @Override
    public String getUsername() {
        return this.username;
    }
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }

}