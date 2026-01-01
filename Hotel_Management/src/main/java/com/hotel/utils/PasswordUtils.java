package com.hotel.utils;


import lombok.*;

import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.security.SecureRandom;
import java.util.Base64;

@RequiredArgsConstructor
public class PasswordUtils {
    private static final String HMAC_SHA512 = "HmacSHA512";

    public static byte[] hashPassword(String password, String key) {
        try {
            byte[] keyBytes = Base64.getDecoder().decode(key);
            Mac mac = Mac.getInstance(HMAC_SHA512);
            SecretKey keyspec = new SecretKeySpec(keyBytes , HMAC_SHA512);
            mac.init(keyspec);
            return mac.doFinal(password.getBytes());

        } catch (Exception e) {
            throw new RuntimeException("Password hashing failed", e);
        }
    }

    public static String generateKey() {
       byte[] key = new byte[64];
       new SecureRandom().nextBytes(key);
       return Base64.getEncoder().encodeToString(key);
    }



}
