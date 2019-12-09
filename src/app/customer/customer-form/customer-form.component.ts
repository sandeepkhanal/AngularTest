import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  starData: any[] =['One Star','TwoStar','Three Star','Four Star','Five Star'];
  
  formObject:any={
    name:'',
    age:null,
    address:''
  }
  constructor(private dialogRef: MatDialogRef<CustomerFormComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {
    console.log(this.data);
    this.formObject={...this.data};
  }

  onFormSubmit(){
    console.log(this.formObject);
    this.dialogRef.close(this.formObject);

  }

}
