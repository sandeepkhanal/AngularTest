import { MatButtonModule } from '@angular/material/button';
import { DeleteConfirmComponent } from './delete-confirm.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [DeleteConfirmComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class DeleteConfirmModule { }
