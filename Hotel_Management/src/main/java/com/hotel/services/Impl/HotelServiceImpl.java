package com.hotel.services.Impl;

import com.hotel.Entity.Hotel;
import com.hotel.Entity.dto.HotelRequest;
import com.hotel.Entity.dto.HotelResponse;
import com.hotel.mapper.HotelMapper;
import com.hotel.repositories.IHotelRepository;
import com.hotel.services.IHotelService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@RequiredArgsConstructor
@Transactional
@Service
public class HotelServiceImpl implements IHotelService {
    private final IHotelRepository hotelRepository;
    private final HotelMapper hotelMapper;

    @Override
    public HotelResponse create(HotelRequest request) {
        Hotel hotel =  hotelMapper.toEntity(request);
        Hotel saved  = hotelRepository.save(hotel);
        return hotelMapper.toResponse(saved);
    }

    @Override
    public List<HotelResponse> getAll() {
       return hotelRepository.findAll().stream()
                .map(hotelMapper::toResponse)
                .toList();

    }

    @Override
    public Optional<HotelResponse> findById(Long id) {
        Optional <HotelResponse> hotelResponse = hotelRepository.findById(id)
                .map(hotelMapper::toResponse);
        return hotelResponse;
    }

    @Override
    public HotelResponse update(Hotel hotel) {
        Hotel saved = hotelRepository.save(hotel);
      return hotelMapper.toResponse(saved);
    }

    @Override
    public void delete(Long id) {
            hotelRepository.deleteById(id);

    }
}
