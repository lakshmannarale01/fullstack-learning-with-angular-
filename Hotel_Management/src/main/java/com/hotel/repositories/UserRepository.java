package com.hotel.repositories;

import com.hotel.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
   Optional<User> findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.email = :email and u.isActive = true")
   Optional<User> findActiveUserByEmail(@Param("email") String email);

    @Query("SELECT COUNT>(u) FROM User u WHERE u.email = :email")
   boolean existsByEmail(String email);

   List<User> findByRole(String role);

    @Query("SELECT u FROM User u WHERE u.createdAt >= :fromDate")
   List<User>findRecentUsers(@Param("fromDate")java.time.LocalDate fromDate);

}
