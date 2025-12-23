package com.hotel.Entity.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ReservationRequest {
    @NotNull
    private Long userId;
    @NotNull private Long roomId;

    @Future(message = "Check-in date must be in the future")
    @NotNull private LocalDate checkInDate;

    @Future(message = "Check-out date must be in the future")
    @NotNull private LocalDate checkOutDate;

    private BigDecimal totalAmount;
}