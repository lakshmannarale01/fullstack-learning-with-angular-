package com.hotel.Entity.dto;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
public class ReservationRequest {
    @NotNull
    private Long userId;
    @NotNull private Long roomId;

    @FutureOrPresent(message = "Check-in date must be today or in the future")
    @NotNull private LocalDate checkInDate;

    @FutureOrPresent(message = "Check-out date must be today or in the future")
    @NotNull private LocalDate checkOutDate;

    private BigDecimal totalAmount;
}
