import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelComponent } from './hotel/hotel.component';
import { CustomerComponent } from './customer/customer.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
    { path: 'hotel', component: HotelComponent },
    { path: 'customer', component: CustomerComponent },
    { path: '', redirectTo: 'hotel', pathMatch: 'full' },
    { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
