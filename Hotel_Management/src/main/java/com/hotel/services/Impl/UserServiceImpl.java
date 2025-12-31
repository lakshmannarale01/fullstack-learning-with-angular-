package com.hotel.services.Impl;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserRequest;
import com.hotel.Entity.dto.UserResponse;
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


    @Override
    public UserResponse create(UserRequest request) {
        User  user = modelMapper.map(request, User.class);
        User saved = userRepository.save(user);
        return modelMapper.map(saved, UserResponse.class);
    }

    @Override
    public Optional<UserResponse> findByUsername(String username) {
        return userRepository.findByUsername(username)
                .map(user -> modelMapper.map(user, UserResponse.class));
    }

    @Override
    public UserResponse update(User user) {
        User saved = userRepository.save(user);
        return modelMapper.map(saved, UserResponse.class);
    }

    @Override
    public void delete(String username) {
userRepository.findByUsername(username)
        .ifPresent(userRepository::delete);
    }
}
