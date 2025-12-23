package com.hotel.services.Impl;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserRequest;
import com.hotel.Entity.dto.UserResponse;
import com.hotel.mapper.UserMapper;
import com.hotel.repositories.UserRepository;
import com.hotel.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {


    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final UserMapper userMapper;


    @Override
    public UserResponse create(UserRequest request) {
        User  user = userMapper.toEntity(request);
        User saved = userRepository.save(user);
        return userMapper.toResponse(saved);
    }

    @Override
    public Optional<UserResponse> findByUsername(String username) {
        return userRepository.findByUsername(username)
                .map(userMapper::toResponse);
    }

    @Override
    public UserResponse update(User user) {
        User saved = userRepository.save(user);
        return userMapper.toResponse(saved);
    }

    @Override
    public void delete(String username) {
userRepository.findByUsername(username)
        .ifPresent(userRepository::delete);
    }
}
