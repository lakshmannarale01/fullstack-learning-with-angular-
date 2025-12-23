package com.hotel.repositories;

import com.hotel.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IReservationRepository extends JpaRepository<Reservation, Long> {
   List<Reservation> findByUserId(Long userId);
    List<Reservation> findByRoomId(Long roomId);

}
