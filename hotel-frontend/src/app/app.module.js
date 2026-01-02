import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component.js';
import { UserRegisterComponent } from './user-register/user-register.component.js';
import { AuthService } from './auth.service.js';

const routes = [
  { path: '', component: UserRegisterComponent }
];

export class AppModule { }

AppModule.annotations = [
  new NgModule({
    declarations: [
      AppComponent,
      UserRegisterComponent
    ],
    imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes)
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
  })
];
