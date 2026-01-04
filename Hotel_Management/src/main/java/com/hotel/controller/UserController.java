package com.hotel.controller;

import com.hotel.Entity.User;
import com.hotel.Entity.dto.AuthenticationRequest;
import com.hotel.Entity.dto.AuthenticationResponse;
import com.hotel.Entity.dto.UserDto;
import com.hotel.repositories.UserRepository;
import com.hotel.services.IUserService;
import com.hotel.utils.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final IUserService userService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserDto userDTO) {
        try {
            UserDto result = userService.register(userDTO);
            return ResponseEntity.ok(result);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
        } catch (Exception e) {
            throw new Exception("Incorrect username or password", e);
        }

        final User user = userRepository.findByUsername(authenticationRequest.getUsername())
                .orElseThrow(() -> new Exception("User not found"));
        
        final String jwt = jwtUtil.generateToken(user);

        return ResponseEntity.ok(new AuthenticationResponse(jwt));
    }

    @GetMapping
    public ResponseEntity<List<UserDto>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @PutMapping("/{userId}/role")
    public ResponseEntity<UserDto> updateUserRole(@PathVariable Long userId, @RequestBody String role) {
        // The role comes in as a JSON string "ADMIN" or "USER", so we need to remove the quotes.
        String cleanedRole = role.replace("\"", "");
        return ResponseEntity.ok(userService.updateUserRole(userId, cleanedRole));
    }
}
