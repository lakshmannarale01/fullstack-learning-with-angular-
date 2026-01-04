package com.hotel.services;

import com.hotel.Entity.dto.RoomRequest;
import com.hotel.Entity.dto.RoomResponse;

import java.util.List;

public interface IRoomService {
    RoomResponse create(RoomRequest request);
    RoomResponse update(Long id, RoomRequest request);
    void delete(Long id);
    RoomResponse getById(Long id);
    List<RoomResponse> getAllByHotelId(Long hotelId);
}
