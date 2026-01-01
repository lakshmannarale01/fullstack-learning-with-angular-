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
@Table(name = "reservations")
@EntityListeners(AuditingEntityListener.class)
@Data @NoArgsConstructor @AllArgsConstructor
@Builder
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id")
    private Room room;

    @Column(name = "check_in_date")
    private LocalDate checkInDate;

    @Column(name = "check_out_date")
    private LocalDate checkOutDate;

    @Column(precision = 12, scale = 2)
    private BigDecimal totalAmount;

    @Column(length = 20)
    private String status;

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
