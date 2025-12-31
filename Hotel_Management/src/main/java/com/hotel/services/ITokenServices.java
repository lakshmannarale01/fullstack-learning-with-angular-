package com.hotel.services;

import org.springframework.stereotype.Service;

@Service
public interface ITokenServices {

    public String generateToken(String username, String role);
}
