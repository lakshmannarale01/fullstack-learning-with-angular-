package com.hotel.services;

import com.hotel.Entity.dto.UserDto;
import java.util.List;

public interface IUserService {

    UserDto register(UserDto userDto);

    List<UserDto> getAllUsers();

    UserDto updateUserRole(Long userId, String role);
}
