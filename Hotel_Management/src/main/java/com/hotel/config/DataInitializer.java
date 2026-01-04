package com.hotel.config;

import com.hotel.Entity.User;
import com.hotel.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (!userRepository.existsByUsername("admin@hotel.com")) {
            User admin = User.builder()
                    .username("admin@hotel.com")
                    .fullName("Admin User")
                    .password(passwordEncoder.encode("password")) // Use a strong password in production
                    .role("ADMIN")
                    .isActive(true)
                    .build();
            userRepository.save(admin);
            System.out.println("Admin user created successfully.");
        }
    }
}
