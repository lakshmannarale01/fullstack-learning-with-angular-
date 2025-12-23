package com.hotel.services;



import com.hotel.Entity.Hotel;
import com.hotel.Entity.dto.HotelRequest;
import com.hotel.Entity.dto.HotelResponse;

import java.util.List;
import java.util.Optional;

public interface IHotelService {
    HotelResponse create(HotelRequest request);
    List<HotelResponse> getAll();
    Optional<HotelResponse> findById(Long id);
    HotelResponse update(Hotel hotel);
    void delete(Long id);
}
