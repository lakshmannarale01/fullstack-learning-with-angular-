import { Component } from '@angular/core';

export class AppComponent {
  title = 'hotel-frontend';
}

AppComponent.annotations = [
  new Component({
    selector: 'app-root',
    template: '<router-outlet></router-outlet>',
    styles: []
  })
];
