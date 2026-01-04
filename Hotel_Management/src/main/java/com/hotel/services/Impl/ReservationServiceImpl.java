package com.hotel.services.Impl;

import com.hotel.Entity.Reservation;
import com.hotel.Entity.Room;
import com.hotel.Entity.User;
import com.hotel.Entity.dto.ReservationRequest;
import com.hotel.Entity.dto.ReservationResponse;
import com.hotel.repositories.IReservationRepository;
import com.hotel.repositories.IRoomRepository;
import com.hotel.repositories.UserRepository;
import com.hotel.services.IReservationService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class ReservationServiceImpl implements IReservationService {

    private final IReservationRepository reservationRepository;
    private final IRoomRepository roomRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public ReservationResponse create(ReservationRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Room room = roomRepository.findById(request.getRoomId())
                .orElseThrow(() -> new RuntimeException("Room not found"));

        if (!room.getIsAvailable()) {
            throw new RuntimeException("Room is not available");
        }

        Reservation reservation = new Reservation();
        reservation.setUser(user);
        reservation.setRoom(room);
        reservation.setCheckInDate(request.getCheckInDate());
        reservation.setCheckOutDate(request.getCheckOutDate());
        reservation.setStatus("BOOKED");

        // Calculate total amount
        long days = ChronoUnit.DAYS.between(request.getCheckInDate(), request.getCheckOutDate());
        if (days < 1) days = 1; // Minimum 1 day
        BigDecimal totalAmount = room.getPrice().multiply(BigDecimal.valueOf(days));
        reservation.setTotalAmount(totalAmount);

        // Mark room as unavailable
        room.setIsAvailable(false);
        roomRepository.save(room);

        Reservation savedReservation = reservationRepository.save(reservation);
        return mapToResponse(savedReservation);
    }

    @Override
    public void cancel(Long id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));

        reservation.setStatus("CANCELLED");
        
        // Make room available again
        Room room = reservation.getRoom();
        room.setIsAvailable(true);
        roomRepository.save(room);

        reservationRepository.save(reservation);
    }

    @Override
    public ReservationResponse getById(Long id) {
        Reservation reservation = reservationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Reservation not found"));
        return mapToResponse(reservation);
    }

    @Override
    public List<ReservationResponse> getByUserId(Long userId) {
        return reservationRepository.findByUserId(userId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private ReservationResponse mapToResponse(Reservation reservation) {
        ReservationResponse response = new ReservationResponse();
        response.setId(reservation.getId());
        response.setUsername(reservation.getUser().getUsername());
        response.setRoomNumber(reservation.getRoom().getRoomNumber());
        response.setHotelName(reservation.getRoom().getHotel().getName());
        response.setCheckInDate(reservation.getCheckInDate());
        response.setCheckOutDate(reservation.getCheckOutDate());
        response.setStatus(reservation.getStatus());
        // response.setCreatedAt(reservation.getCreatedAt().atStartOfDay()); // Assuming createdAt is LocalDate
        return response;
    }
}
