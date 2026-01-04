# Hotel Management Frontend

This is the frontend for the Hotel Management application, built with Angular. It provides a user-friendly interface for customers to book rooms and for administrators to manage the application's data.

## Features

- **Component-Based Architecture:** A clean and modular structure with dedicated components for each feature.
- **Service Layer:** A well-defined service layer for handling all API communication, making components cleaner and more focused.
- **JWT Authentication:** Securely stores the JWT token from the login process and automatically attaches it to all subsequent API requests using an `HttpInterceptor`.
- **Dynamic UI:** The user interface dynamically changes based on the user's role (`ADMIN` vs. `USER`).
  - Admins see buttons for adding/deleting hotels, rooms, and managing users.
  - Regular users see a customer-focused view for browsing and booking.
- **User-Friendly Feedback:** Includes loading spinners during data fetching and clear error messages for a better user experience.

## Technologies Used

- **Angular 17** (Standalone Components)
- **TypeScript**
- **Bootstrap 5:** For responsive design and pre-styled components.
- **Boxicons:** For icons used throughout the application.

---

## Getting Started

### Prerequisites

- **Node.js and npm:** It is recommended to use the latest LTS (Long-Term Support) version.
- **Angular CLI:** Install it globally by running:
  ```bash
  npm install -g @angular/cli
  ```

### Setup and Installation

1.  **Install Dependencies:**
    - Navigate to the `Hotel-frontend` root directory in your terminal.
    - Run the following command to install all the necessary packages defined in `package.json`:
      ```bash
      npm install
      ```

### Running the Application

1.  **Start the Development Server:**
    - In the `Hotel-frontend` directory, run:
      ```bash
      ng serve
      ```
    - This will compile the application and start a local development server.

2.  **Open in Browser:**
    - Open your web browser and navigate to `http://localhost:4200/`.
    - The application will automatically reload if you make any changes to the source files.

**Important:** The frontend application requires the backend server to be running simultaneously to function correctly. Make sure your `Hotel_Management` Spring Boot application is running on `http://localhost:1998`.

---

## Project Structure Overview

- **`src/app/components`**: Contains all the application's components.
  - `login`, `registration`: Handle user authentication.
  - `hotel-list`, `add-hotel`: For hotel management.
  - `room-list`, `add-room`: For room management.
  - `my-bookings`, `book-room`: For handling reservations.
  - `user-management`: For admins to manage user roles.
- **`src/app/services`**: Contains the services that handle API communication.
  - `auth.service.ts`: Manages user authentication state and JWT decoding.
  - `hotel.service.ts`, `room.service.ts`, `reservation.service.ts`, `user.service.ts`: Handle CRUD operations for their respective features.
- **`src/app/auth.interceptor.ts`**: Automatically attaches the JWT `Authorization` header to outgoing API requests.
- **`src/app/app.routes.ts`**: Defines all the navigation routes for the application.
- **`src/styles.css`**: For global styles that apply to the entire application.
