package com.hotel.services;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserDto;

import java.util.Optional;

public interface IUserService { ;

    UserDto login (UserDto userDto);

    UserDto register(UserDto userDto);


}
