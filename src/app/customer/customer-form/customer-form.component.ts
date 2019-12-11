import { CustomerService } from './../customer.service';
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
    customerId:null,
    firstName:'',
    lastName:'',
    address:'',
    contact:'',
    hotelId:0,
  }
  constructor(private dialogRef: MatDialogRef<CustomerFormComponent>,@Inject(MAT_DIALOG_DATA) public data:any,private customerService:CustomerService) { }

  ngOnInit() {
    console.log(this.data);
    this.formObject={...this.data};
  }

  onFormSubmit(){
    if (this.formObject.customerId >0){
      this.customerService.putCustomer(this.formObject).subscribe(response=>{
      this.formObject.customerId=response;
      this.dialogRef.close(this.formObject);
     })
    }
    else
    {
      this.customerService.postCustomer(this.formObject).subscribe( response => {
      this.formObject.customerId=response;
      this.dialogRef.close(this.formObject);
      });
    }
  }

}
