package com.hotel.services.Impl;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserDto;
import com.hotel.repositories.UserRepository;
import com.hotel.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    @Override
    public UserDto login(UserDto userDto) {
        // This method is no longer responsible for authentication.
        // Authentication is handled by Spring Security.
        // This method can be removed or repurposed if needed.
        return null;
    }

    @Override
    public UserDto register(UserDto userDTO) {
        User user = User.builder()
                .username(userDTO.getUsername())
                .password(passwordEncoder.encode(userDTO.getPassword()))
                .role(userDTO.getRole())
                .build();

        user.setActive(true);
        userRepository.save(user);

        return modelMapper.map(user, UserDto.class);
    }
}
