package com.hotel.services.Impl;

import com.hotel.services.ITokenServices;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class TokenServiceImpl implements ITokenServices {


    private final byte[] jwtKey;

    @Override
    public String generateToken(String username, String role) {
        // Create claims
        Map<String, Object> claims = new HashMap<>();
        claims.put("sub", username);  // Subject claim for username
        claims.put("role", role);

        // JWT Builder
        JwtBuilder builder = Jwts.builder()
                .setClaims(claims)
                .setSubject(username)
                .claim("role", role)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 86400000)); // 1 day

        // Sign the token
        SecretKey secretKey = Keys.hmacShaKeyFor(jwtKey);
        return builder.signWith(secretKey, SignatureAlgorithm.HS256).compact();
    }

}
