import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.css']
})
export class BookRoomComponent implements OnInit {
  bookingForm: FormGroup;
  roomId: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bookingForm = this.fb.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      userId: [1, Validators.required] // Hardcoded for now, should come from auth service
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.roomId = +params['roomId'];
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const bookingData = {
        ...this.bookingForm.value,
        roomId: this.roomId
      };

      this.http.post('http://localhost:1998/api/v1/reservations/create-reservation', bookingData)
        .subscribe({
          next: (res) => {
            console.log('Booking successful', res);
            this.successMessage = 'Booking successful!';
            setTimeout(() => {
              this.router.navigate(['/hotels']);
            }, 1500);
          },
          error: (err) => {
            console.error('Error booking room', err);
            this.errorMessage = 'Failed to book room. Please try again.';
          }
        });
    }
  }
}
