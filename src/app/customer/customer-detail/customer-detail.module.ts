import { MatButtonModule } from '@angular/material/button';
import { CustomerDetailComponent } from './customer-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CustomerDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[CustomerDetailComponent]
})
export class CustomerDetailModule { }