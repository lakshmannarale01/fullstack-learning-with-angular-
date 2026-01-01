import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { HttpClientModule } from '@angular/common/http';

const routes = [
  { path: '', component: UserRegisterComponent }
];

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
