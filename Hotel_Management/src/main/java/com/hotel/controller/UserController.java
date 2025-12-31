package com.hotel.controller;


import com.hotel.Entity.dto.UserDto;
import com.hotel.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/users")
public class UserController {
private final IUserService userService;

@PostMapping("/login")
public ResponseEntity login(@RequestBody UserDto userDto) {
    UserDto user = userService.login(userDto);
    if(user == null){
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
return ResponseEntity.ok(user);
}
    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody UserDto userDTO) {
        UserDto result = userService.register(userDTO);
        if (result == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(result);
    }

}
