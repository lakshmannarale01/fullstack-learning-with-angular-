package com.hotel.controller;


import com.hotel.Entity.Hotel;
import com.hotel.Entity.dto.HotelRequest;
import com.hotel.Entity.dto.HotelResponse;
import com.hotel.services.IHotelService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/hotels")
@RequiredArgsConstructor
public class HotelController {

    private final IHotelService hotelService;
    private final ModelMapper modelMapper;

    @PostMapping("/create-Hotel")
    public ResponseEntity<?> create(@Valid @RequestBody HotelRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
           HotelResponse hotelResponse = hotelService.create(request);
            response.put("success", true);
            response.put("message", "Hotel created successfully");
            return ResponseEntity.ok(hotelResponse);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }

    }


    @GetMapping("/get-all-hotels")
    public ResponseEntity<List<HotelResponse>> getAll() {
        return ResponseEntity.ok(hotelService.getAll());
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        Optional<HotelResponse> hotel = hotelService.findById(id);
        if (hotel.isPresent()) {
            return ResponseEntity.ok(hotel.get());
        } else {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Hotel not found");
            return ResponseEntity.status(404).body(response);
        }
    }

    @PutMapping("/update-hotel/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @Valid @RequestBody HotelRequest request) {
        Map<String, Object> response = new HashMap<>();
        try {
            // Check if hotel exists first
            Optional<HotelResponse> existingHotel = hotelService.findById(id);
            if (existingHotel.isEmpty()) {
                response.put("success", false);
                response.put("message", "Hotel not found");
                return ResponseEntity.status(404).body(response);
            }

            // Map request to entity
            Hotel hotelToUpdate = modelMapper.map(request, Hotel.class);
            hotelToUpdate.setId(id); // Ensure ID is preserved

            HotelResponse updatedHotel = hotelService.update(hotelToUpdate);
            
            response.put("success", true);
            response.put("message", "Hotel updated successfully");
            response.put("data", updatedHotel);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }

    @DeleteMapping("/delete-hotel/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Map<String, Object> response = new HashMap<>();
        try {
            Optional<HotelResponse> existingHotel = hotelService.findById(id);
            if (existingHotel.isEmpty()) {
                response.put("success", false);
                response.put("message", "Hotel not found");
                return ResponseEntity.status(404).body(response);
            }

            hotelService.delete(id);
            response.put("success", true);
            response.put("message", "Hotel deleted successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
            return ResponseEntity.status(400).body(response);
        }
    }
}
