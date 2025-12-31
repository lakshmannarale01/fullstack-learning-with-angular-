package com.hotel.repositories;

import com.hotel.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, String> {
   Optional<User> findByUsername(String username);

    @Query("SELECT u FROM User u WHERE u.username = :username and u.isActive = true")
   Optional<User> findActiveUserByUsername(@Param("username") String username);

   boolean existsByUsername(String username);

   List<User> findByRole(String role);

    @Query("SELECT u FROM User u WHERE u.createdAt >= :fromDate")
   List<User>findRecentUsers(@Param("fromDate")java.time.LocalDate fromDate);

}
