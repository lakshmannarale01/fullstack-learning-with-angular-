package com.hotel.services;

import com.hotel.Entity.Reservation;
import com.hotel.Entity.dto.ReservationRequest;
import com.hotel.Entity.dto.ReservationResponse;

import java.util.List;
import java.util.Optional;

public interface IReservationService {
    ReservationResponse create(ReservationRequest request);
    List<ReservationResponse> getAll();
    Optional<ReservationResponse> findById(Long id);
    ReservationResponse update(Reservation reservation);
    void delete(Long id);
}