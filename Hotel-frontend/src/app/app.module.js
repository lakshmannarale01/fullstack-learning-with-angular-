import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  // standalone
import { HomeComponent } from './home/home.component';  // standalone

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppComponent,    // import standalone component here
    HomeComponent    // import standalone component here if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
