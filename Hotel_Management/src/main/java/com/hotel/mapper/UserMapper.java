package com.hotel.mapper;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserRequest;
import com.hotel.Entity.dto.UserResponse;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User toEntity(UserRequest request);
    UserResponse toResponse(User user);
    void updateEntity(UserRequest request, @MappingTarget User user);
}