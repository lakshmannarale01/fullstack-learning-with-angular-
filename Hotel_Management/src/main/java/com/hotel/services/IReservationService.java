package com.hotel.services;

import com.hotel.Entity.dto.ReservationRequest;
import com.hotel.Entity.dto.ReservationResponse;

import java.util.List;

public interface IReservationService {
    ReservationResponse create(ReservationRequest request);
    void cancel(Long id);
    ReservationResponse getById(Long id);
    List<ReservationResponse> getByUserId(Long userId);
}
