import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerFormModule } from './customer-form/customer-form.module';
import { MatButtonModule } from '@angular/material/button';
import { CustomerDetailModule } from './customer-detail/customer-detail.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
      CustomerComponent,
    ],
  imports: [
      CommonModule,
      CustomerDetailModule,
      MatDialogModule,
      MatButtonModule,
      CustomerFormModule,
      MatTableModule
  ],
  entryComponents:[
    CustomerFormComponent
  ]
})
export class CustomerModule { }
