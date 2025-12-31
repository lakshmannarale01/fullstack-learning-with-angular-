package com.hotel.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/users")
public class UserController {
//
//    private IUserService userService;
//
//    @PostMapping("/register")
//    public ResponseEntity<?> register(@RequestBody UserRequest request) {
//        Map<String, Object> response = new HashMap<>();
//        try {
//            Optional<UserResponse> userResponse = userService.findByUsername(request.getUsername());
//            response.put("success", true);
//            response.put("message", "Tax Registration created successfully");
//            return ResponseEntity.ok(userResponse);
//        } catch (Exception e) {
//            response.put("success", false);
//            response.put("message", e.getMessage());
//            return ResponseEntity.status(400).body(response);
//        }
//    }
//    @GetMapping("/{username}")
//    public ResponseEntity<?> findByUsername(String username) {
//   Optional<UserResponse> user  =  userService.findByUsername(username);
//        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//
//    }
}
