import { RouterModule, Routes } from '@angular/router';
import { HotelesComponent } from '../app/components/hoteles/hoteles.component';
import { HomeComponent } from '../app/components/home/home.component';
import { HotelComponent } from '../app/components/hoteles/hotel.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hoteles', component: HotelesComponent },
  { path: 'hotel/:id', component: HotelComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
