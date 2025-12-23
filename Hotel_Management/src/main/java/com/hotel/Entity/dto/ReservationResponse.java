package com.hotel.Entity.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class ReservationResponse {
    private Long id;
    private String username;
    private String roomNumber;
    private String hotelName;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private String status;
    private LocalDateTime createdAt;
}