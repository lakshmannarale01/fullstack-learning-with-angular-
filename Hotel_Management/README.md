# Hotel Management Backend

This is the backend server for the Hotel Management application, built with Java and the Spring Boot framework. It provides a complete RESTful API for managing users, hotels, rooms, and reservations.

## Features

- **Authentication:** Secure user registration and login using JWT (JSON Web Tokens).
- **Role-Based Authorization:** Distinction between `ADMIN` and `USER` roles, with specific permissions for each.
- **User Management:** Admins can view all users and change their roles.
- **Hotel Management:** Admins can perform full CRUD (Create, Read, Update, Delete) operations on hotels.
- **Room Management:** Admins can perform full CRUD operations on rooms for each hotel.
- **Reservation System:** Authenticated users can book available rooms, view their own bookings, and cancel them.

## Technologies Used

- **Java 17**
- **Spring Boot 3**
- **Spring Security:** For authentication and role-based authorization.
- **Spring Data JPA (Hibernate):** For database interaction.
- **PostgreSQL:** As the relational database.
- **Lombok:** To reduce boilerplate code.
- **ModelMapper:** For object mapping between DTOs and entities.
- **Gradle:** As the build tool.

---

## Getting Started

### Prerequisites

- **JDK 17** or later.
- **PostgreSQL** database server.
- An IDE like IntelliJ IDEA or VS Code.

### Setup and Configuration

1.  **Create the Database:**
    - Open your PostgreSQL admin tool (like `psql` or pgAdmin).
    - Create a new database named `hotel_management`.
    ```sql
    CREATE DATABASE hotel_management;
    ```

2.  **Configure the Application:**
    - Open the `src/main/resources/application.yaml` file.
    - Verify that the database connection details match your local PostgreSQL setup. You may need to change the `username` and `password`.
    ```yaml
    spring:
      datasource:
        url: jdbc:postgresql://localhost:5432/hotel_management
        username: postgres
        password: root # <-- Change this if your password is different
    ```

### Running the Application

- **From your IDE:** Open the `HotelManagementApplication.java` file and run the `main()` method.
- **From the command line:** Navigate to the project's root directory and run:
  ```bash
  ./gradlew bootRun
  ```
The server will start on `http://localhost:1998`.

### Default Admin User

On the first startup, a default administrator account is created automatically. You can use this account to log in and manage the application.

- **Username:** `admin@hotel.com`
- **Password:** `password`

---

## API Endpoints

### User Controller (`/api/v1/users`)
- `POST /register`: Register a new user (defaults to `USER` role).
- `POST /login`: Authenticate a user and receive a JWT token.
- `GET /`: Get a list of all users (Admin only).
- `PUT /{userId}/role`: Update the role of a specific user (Admin only).

### Hotel Controller (`/api/v1/hotels`)
- `POST /create-Hotel`: Add a new hotel (Admin only).
- `GET /get-all-hotels`: Get a list of all hotels.
- `GET /get-by-id/{id}`: Get details of a specific hotel.
- `PUT /update-hotel/{id}`: Update a hotel's details (Admin only).
- `DELETE /delete-hotel/{id}`: Delete a hotel (Admin only).

### Room Controller (`/api/v1/rooms`)
- `POST /create-Room`: Add a new room to a hotel (Admin only).
- `GET /get-by-hotel/{hotelId}`: Get all rooms for a specific hotel.
- `PUT /update-room/{id}`: Update a room's details (Admin only).
- `DELETE /delete-room/{id}`: Delete a room (Admin only).

### Reservation Controller (`/api/v1/reservations`)
- `POST /create-reservation`: Book a room.
- `POST /cancel-reservation/{id}`: Cancel a booking.
- `GET /get-by-user/{userId}`: Get all bookings for a specific user.
