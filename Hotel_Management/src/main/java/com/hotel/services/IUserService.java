package com.hotel.services;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserRequest;
import com.hotel.Entity.dto.UserResponse;

import java.util.Optional;

public interface IUserService {
    UserResponse create(UserRequest request);
    Optional<UserResponse> findByUsername(String username);
    UserResponse update(User user);
    void delete(String username);
}
