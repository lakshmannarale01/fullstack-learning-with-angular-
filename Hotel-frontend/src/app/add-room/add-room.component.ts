import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-room',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  roomForm: FormGroup;
  hotelId: number = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.roomForm = this.fb.group({
      roomNumber: ['', Validators.required],
      roomType: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: [''],
      isAvailable: [true]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.hotelId = +params['hotelId'];
    });
  }

  onSubmit() {
    if (this.roomForm.valid) {
      const roomData = {
        ...this.roomForm.value,
        hotelId: this.hotelId
      };

      this.http.post('http://localhost:1998/api/v1/rooms/create-Room', roomData)
        .subscribe({
          next: (res) => {
            console.log('Room added successfully', res);
            this.successMessage = 'Room added successfully!';
            setTimeout(() => {
              this.router.navigate(['/hotels', this.hotelId, 'rooms']);
            }, 1500);
          },
          error: (err) => {
            console.error('Error adding room', err);
            this.errorMessage = 'Failed to add room. Please try again.';
          }
        });
    }
  }
}
