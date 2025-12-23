package com.hotel.mapper;

import com.hotel.Entity.Hotel;
import com.hotel.Entity.dto.HotelRequest;
import com.hotel.Entity.dto.HotelResponse;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface HotelMapper {
    Hotel toEntity(HotelRequest request);
    HotelResponse toResponse(Hotel hotel);
    void updateEntity(HotelRequest request, @MappingTarget Hotel hotel);
}
