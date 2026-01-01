package com.hotel.config;

import com.hotel.utils.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.AuditorAware;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.util.Optional;

@Component
public class AuditorAwareImpl implements AuditorAware<String> {
    private static final Logger LOGGER = LoggerFactory.getLogger(AuditorAwareImpl.class);

    private final JwtUtil jwtUtil;

    public AuditorAwareImpl(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @Override
    public Optional<String> getCurrentAuditor() {
        try {
            ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();

            if (attributes == null) {
                LOGGER.debug("No request attributes found, returning empty auditor");
                return Optional.of("SYSTEM");
            }

            HttpServletRequest request = attributes.getRequest();
            String authHeader = request.getHeader("Authorization");

            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                LOGGER.debug("No valid Authorization header found, returning SYSTEM as auditor");
                return Optional.of("SYSTEM");
            }

            String token = authHeader.substring(7);
            String username = jwtUtil.extractUsername(token);

            if (username != null && !username.isEmpty()) {
                LOGGER.debug("Extracted auditor from JWT: {}", username);
                return Optional.of(username);
            }

            return Optional.of("SYSTEM");
        } catch (Exception e) {
            LOGGER.warn("Error extracting auditor from JWT: {}", e.getMessage());
            return Optional.of("SYSTEM");
        }
    }
}
