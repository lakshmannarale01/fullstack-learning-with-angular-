package com.hotel.Entity.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
public class UserDto {
        public Optional<String> username;
        public Optional<String> password;
        public Optional<String> key;
        public Optional<String> role;
}
