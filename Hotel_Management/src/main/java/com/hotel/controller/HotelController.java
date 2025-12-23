package com.hotel.controller;


import com.hotel.Entity.dto.HotelRequest;
import com.hotel.Entity.dto.HotelResponse;
import com.hotel.services.IHotelService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/hotels")
@RequiredArgsConstructor
public class HotelController {

    private final IHotelService hotelService;

    @PostMapping
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


    @GetMapping
    public ResponseEntity<List<HotelResponse>> getAll() {
        return ResponseEntity.ok(hotelService.getAll());
    }


}
