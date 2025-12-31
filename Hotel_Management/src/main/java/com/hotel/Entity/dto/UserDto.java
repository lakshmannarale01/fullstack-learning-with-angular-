package com.hotel.Entity.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Optional;

@Getter
@Setter
@Builder
public class UserDto {
        public Optional<String> username;
        public Optional<String> password;
        public Optional<String> key;
        public Optional<String> role;
}
