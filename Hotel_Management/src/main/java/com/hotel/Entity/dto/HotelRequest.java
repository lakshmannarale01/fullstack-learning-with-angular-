package com.hotel.Entity.dto;



import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class HotelRequest {
    @NotBlank(message = "Hotel name is required")
    private String name;

    private String location;

    @NotNull(message = "Total rooms is required")
    private Integer totalRooms;

    private String starRating;
}