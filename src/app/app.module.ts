import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HotelesComponent } from './components/hoteles/hoteles.component';
import { HotelComponent } from './components/hoteles/hotel.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HotelesComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING,
    AgmCoreModule.forRoot({
     apiKey: 'AIzaSyDOP6i326mY32uBmQMc9-yxg0T6ink5-rE',
     libraries: ["places"]
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
