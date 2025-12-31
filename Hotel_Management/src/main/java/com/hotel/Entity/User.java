package com.hotel.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@EntityListeners(AuditingEntityListener.class)
@Data @NoArgsConstructor @AllArgsConstructor
@Builder
public class User {
    @Id
    @Column(name = "user_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;


    @Column(name = "username",unique = true, nullable = false, length = 50)
    private String username;


    @Column(name = "full_name")
    private String fullName;



    @Column(name = "password_hash", nullable = false)
    private String password;


    @Column(name = "token", length = 500)
    private String token;

    @Column(name = "role", length = 20)
    private String role;

    @Column(name = "has_password_changed", nullable = false)
    private Boolean hasPasswordChanged;

    @Column(name = "last_login_at")
    private LocalDateTime lastLoginAt;

    @CreatedDate
    private LocalDateTime createdAt;

    @Column(name = "is_active", nullable = false)
    @Builder.Default
    private boolean isActive = true;

}
