package com.hotel.services.Impl;

import com.hotel.Entity.Hotel;
import com.hotel.Entity.Room;
import com.hotel.Entity.dto.RoomRequest;
import com.hotel.Entity.dto.RoomResponse;
import com.hotel.repositories.IHotelRepository;
import com.hotel.repositories.IRoomRepository;
import com.hotel.services.IRoomService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class RoomServiceImpl implements IRoomService {

    private final IRoomRepository roomRepository;
    private final IHotelRepository hotelRepository;
    private final ModelMapper modelMapper;

    @Override
    public RoomResponse create(RoomRequest request) {
        Hotel hotel = hotelRepository.findById(request.getHotelId())
                .orElseThrow(() -> new RuntimeException("Hotel not found"));

        Room room = modelMapper.map(request, Room.class);
        
        // Ensure ID is null so Hibernate treats it as a new entity
        room.setId(null);
        room.setHotel(hotel);
        
        Room savedRoom = roomRepository.save(room);
        return mapToResponse(savedRoom);
    }

    @Override
    public RoomResponse update(Long id, RoomRequest request) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        if (!room.getHotel().getId().equals(request.getHotelId())) {
             Hotel hotel = hotelRepository.findById(request.getHotelId())
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
             room.setHotel(hotel);
        }

        room.setRoomNumber(request.getRoomNumber());
        room.setRoomType(request.getRoomType());
        room.setPrice(request.getPrice());
        room.setDescription(request.getDescription());
        if (request.getIsAvailable() != null) {
            room.setIsAvailable(request.getIsAvailable());
        }

        Room updatedRoom = roomRepository.save(room);
        return mapToResponse(updatedRoom);
    }

    @Override
    public void delete(Long id) {
        if (!roomRepository.existsById(id)) {
            throw new RuntimeException("Room not found");
        }
        roomRepository.deleteById(id);
    }

    @Override
    public RoomResponse getById(Long id) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));
        return mapToResponse(room);
    }

    @Override
    public List<RoomResponse> getAllByHotelId(Long hotelId) {
        return roomRepository.findByHotelId(hotelId).stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    private RoomResponse mapToResponse(Room room) {
        RoomResponse response = modelMapper.map(room, RoomResponse.class);
        response.setHotelId(room.getHotel().getId());
        response.setHotelName(room.getHotel().getName());
        return response;
    }
}
