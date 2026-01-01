package com.hotel.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "rooms")
@EntityListeners(AuditingEntityListener.class)
@Data @NoArgsConstructor @AllArgsConstructor
@Builder
public class Room {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "hotel_id", nullable = false)
    private Hotel hotel;

    @Column(name = "room_number", nullable = false, length = 20)
    private String roomNumber;

    @Column(name = "room_type", length = 20)
    private String roomType; // SINGLE, DOUBLE, SUITE, DELUXE

    @Column(name = "is_available")
    @Builder.Default
    private Boolean isAvailable = true;

    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    @Column(length = 500)
    private String description;

    @LastModifiedDate
    @Column(name = "updatedAt")
    private LocalDate updatedAt;

    @CreatedDate
    @Column(name = "createdAt", updatable = false)
    private LocalDate createdAt;

    @LastModifiedBy
    @Column(name = "updatedBy")
    private String uploadedBy;

    @CreatedBy
    @Column(name = "createdBy", updatable = false)
    private String createdBy;

    @Version
    @Column(name = "VERSION")
    private Long version;
}
