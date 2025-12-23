package com.hotel.Entity.dto;

import lombok.Data;

@Data
public class HotelResponse {
    private Long id;
    private String name;
    private String location;
    private Integer totalRooms;
    private String starRating;
}