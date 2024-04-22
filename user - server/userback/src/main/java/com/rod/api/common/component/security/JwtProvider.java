package com.rod.api.common.component.security;

import com.rod.api.user.model.UserDto;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.log4j.Log4j2;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;

import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;


@Log4j2
@Component
public class JwtProvider {
    @Value("${jwt.iss}")
    private String issuer;
    private final SecretKey secretKey;

//    @Value("${jwt.exp}")
    Instant expiredDate = Instant.now().plus(1, ChronoUnit.DAYS);

    public JwtProvider(@Value("${jwt.secret}") String secretKey) {
        this.secretKey = Keys.hmacShaKeyFor(Decoders.BASE64URL.decode(secretKey));
    }

    public String createToken(UserDto userDto) {

        String token = Jwts.builder()
                .issuer(issuer)
                .signWith(secretKey)
                .expiration(Date.from(expiredDate))
                .subject("rod")
                .claim("username", userDto.getUsername())
                .claim("job", userDto.getJob())
                .claim("userId", userDto.getId())

                .compact();


        log.info("로그인 성공으로 발급된 토큰 : "+token);

        return token;
    }


    public String extractTokenFromHeader(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authrization");

        if(bearerToken != null && bearerToken.startsWith("Bearer")){
            return bearerToken.substring(7);
        }

        return null;
    }

    public String getPayload(String accessToken) {
        String[] chunks = accessToken.split("\\.");
        Base64.Decoder decoder = Base64.getUrlDecoder();

        String header = new String(decoder.decode(chunks[0]));
        String payload = new String(decoder.decode(chunks[1]));

        log.info("Access Token Header : "+header);
        log.info("Access Token payload : "+payload);

//        return new StringBuilder().append(header).append(payload).toString();
        return payload;
    }
}

