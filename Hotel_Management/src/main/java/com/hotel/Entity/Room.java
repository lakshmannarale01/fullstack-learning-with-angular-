package com.hotel.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
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
    private Boolean isAvailable = true;

    @Column(precision = 10, scale = 2)
    private BigDecimal price;

    @Column(length = 500)
    private String description;

    @CreatedDate
    private LocalDateTime createdAt;
}
