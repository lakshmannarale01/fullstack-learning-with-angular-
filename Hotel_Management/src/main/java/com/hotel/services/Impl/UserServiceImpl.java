package com.hotel.services.Impl;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.UserDto;
import com.hotel.repositories.UserRepository;
import com.hotel.services.ITokenServices;
import com.hotel.services.IUserService;
import com.hotel.utils.PasswordUtils;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Base64;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {

    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final ITokenServices tokenServices;

    @Override
    public UserDto login(UserDto userDTO) {
        Optional<User> userOpt = userRepository.findByUsername(userDTO.getUsername());
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            byte[] dbPass = Base64.getDecoder().decode(user.getPassword());
            byte[] userPass = PasswordUtils.hashPassword(userDTO.getPassword(), user.getKey());

            if (userPass.length == dbPass.length && java.util.Arrays.equals(userPass, dbPass)) {
                return UserDto.builder()
                        .username(user.getUsername())
                        .token(tokenServices.generateToken(user.getUsername(), user.getRole()))
                        .build();
            }
        }
        return null;
    }

    @Override
    public UserDto register(UserDto userDTO) {
        String key = PasswordUtils.generateKey();
        byte[] hashedPassword = PasswordUtils.hashPassword(userDTO.getPassword(), key);

        User user = User.builder()
                .username(userDTO.getUsername())
                .password(Base64.getEncoder().encodeToString(hashedPassword))
                .role(userDTO.getRole())
                .key(key)
                .build();

        user.setActive(true);
        userRepository.save(user);

        return UserDto.builder()
                .username(user.getUsername())
                .token(tokenServices.generateToken(user.getUsername(), user.getRole()))
                .build();
    }
}