import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.css'],
    standalone: false
})
export class AppComponent {
  title = 'hotel-frontend';
  username = '';

  register() {
    const user = {
      username: this.username
    };
    console.log('Register:', user);
    alert('Sent to Spring Boot: ' + JSON.stringify(user));
  }
}
