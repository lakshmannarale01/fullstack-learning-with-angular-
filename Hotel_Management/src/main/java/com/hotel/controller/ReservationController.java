package com.hotel.controller;

import com.hotel.Entity.dto.ReservationRequest;
import com.hotel.Entity.dto.ReservationResponse;
import com.hotel.services.IReservationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/reservations")
@RequiredArgsConstructor
public class ReservationController {

    private final IReservationService reservationService;

    @PostMapping("/create-reservation")
    public ResponseEntity<?> create(@Valid @RequestBody ReservationRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            ReservationResponse reservationResponse = reservationService.create(request);
            response.put("success", true);
            response.put("message", "Reservation created successfully");
            response.put("data", reservationResponse);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }

    @PostMapping("/cancel-reservation/{id}")
    public ResponseEntity<?> cancel(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            reservationService.cancel(id);
            response.put("success", true);
            response.put("message", "Reservation cancelled successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }

    @GetMapping("/get-by-user/{userId}")
    public ResponseEntity<List<ReservationResponse>> getByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(reservationService.getByUserId(userId));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
         try {
            return ResponseEntity.ok(reservationService.getById(id));
        } catch (Exception e) {
             Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(404).body(response);
        }
    }
}
