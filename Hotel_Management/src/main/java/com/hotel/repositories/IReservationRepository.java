package com.hotel.repositories;

import com.hotel.Entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IReservationRepository extends JpaRepository<Reservation, Long> {
   List<Reservation> findByUser_UserId(Long userId);
    List<Reservation> findByRoom_Id(Long roomId);

}
