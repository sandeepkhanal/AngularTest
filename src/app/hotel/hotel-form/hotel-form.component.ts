import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss']
})
export class HotelFormComponent implements OnInit {
  formObject:any={
    name:'',
    age:null,
    address:'',
    available:false,
    rating:''
  }
  starData: any[] =['*','**','***','****','*****'];
  
  servicesList: string[] = ['Pool', 'Snooker', 'Swimming'];

  selected:any = -1;

  value="Clear";
  
  constructor(private dialogRef: MatDialogRef<HotelFormComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    this.formObject={...this.data};
  }

  onFormSubmit(){
    console.log(this.formObject);
    this.dialogRef.close(this.formObject);
  }



}
