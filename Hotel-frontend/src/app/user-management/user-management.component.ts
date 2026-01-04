import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { User, UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: User[] = [];
  isLoading = false;
  errorMessage = '';
  currentUserId: number | null;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) {
    this.currentUserId = this.authService.getUserId();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Could not load users.';
        this.isLoading = false;
      }
    });
  }

  onRoleChange(user: User, event: any): void {
    const newRole = event.target.value;
    if (user.userId === this.currentUserId) {
      alert("You cannot change your own role.");
      event.target.value = user.role; // Revert dropdown
      return;
    }

    this.userService.updateUserRole(user.userId, newRole).subscribe({
      next: () => {
        user.role = newRole; // Update UI
      },
      error: (err) => {
        this.errorMessage = `Failed to update role for ${user.username}.`;
        event.target.value = user.role; // Revert dropdown on error
      }
    });
  }
}
