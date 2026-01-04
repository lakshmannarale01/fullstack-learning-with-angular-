package com.hotel.controller;

import com.hotel.Entity.dto.RoomRequest;
import com.hotel.Entity.dto.RoomResponse;
import com.hotel.services.IRoomService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/rooms")
@RequiredArgsConstructor
public class RoomController {

    private final IRoomService roomService;

    @PostMapping("/create-Room")
    public ResponseEntity<?> create(@Valid @RequestBody RoomRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            RoomResponse roomResponse = roomService.create(request);
            response.put("success", true);
            response.put("message", "Room created successfully");
            response.put("data", roomResponse);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }

    @PutMapping("/update-room/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody RoomRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            RoomResponse roomResponse = roomService.update(id, request);
            response.put("success", true);
            response.put("message", "Room updated successfully");
            response.put("data", roomResponse);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }

    @DeleteMapping("/delete-room/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            roomService.delete(id);
            response.put("success", true);
            response.put("message", "Room deleted successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        try {
            RoomResponse room = roomService.getById(id);
            return ResponseEntity.ok(room);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(404).body(response);
        }
    }

    @GetMapping("/get-by-hotel/{hotelId}")
    public ResponseEntity<List<RoomResponse>> getByHotelId(@PathVariable Long hotelId) {
        return ResponseEntity.ok(roomService.getAllByHotelId(hotelId));
    }
}
