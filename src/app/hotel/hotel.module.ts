import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { DeleteConfirmModule } from './delete-confirm/delete-confirm.module';
import { HotelFormModule } from './hotel-form/hotel-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
    declarations: [HotelComponent],
  imports: [
      CommonModule,
      MatInputModule,
      MatFormFieldModule,
      FormsModule,
      MatButtonModule,
      MatDialogModule,
      MatTableModule,
      HotelFormModule,
      MatSnackBarModule,
      DeleteConfirmModule,
      MatPaginatorModule
  ],
  entryComponents:[
    HotelFormComponent,
    DeleteConfirmComponent
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1200}}
  ]
})
export class HotelModule { }
