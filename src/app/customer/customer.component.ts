import { CustomerFormComponent } from './customer-form/customer-form.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from './customer.service';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit,OnDestroy {
  
  selectedRow:number;
  myCustomer = 'Tim';
  personData: any[];




  displayedColumns: string[] = ['firstname','lastname', 'address','contact'];

  receivedMessage:string;
  constructor(private matDialog: MatDialog,private customerService:CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(response => {
      this.personData=response;
    })

    
    
  }

  onRowClick(index){
    //this.myCustomer=data.name;
    this.selectedRow=index;
    console.log(this.personData[this.selectedRow].customerId)
  }

  onMessageReceive(event){
    this.receivedMessage=event;
  }

  onAddClick(){
    const dialogRef=this.matDialog.open(CustomerFormComponent);
    dialogRef.afterClosed().subscribe(response => {
      if(response){
      const tempArray =[...this.personData];
      tempArray.unshift(response);
      this.personData=tempArray;
      }
      })
      // const dialogRef=this.matDialog.open(CustomerFormComponent);
      
      // dialogRef.afterClosed().subscribe(response => {
      // this.personData.unshift(response);
    // });
  }

  onEditClick(){
    if(this.selectedRow !=null){
    const dialogRef=this.matDialog.open(CustomerFormComponent,{data:this.personData[this.selectedRow]});
    dialogRef.afterClosed().subscribe(response => {
      if(response){
        //this.personData[this.selectedIndex]={...response};
        const tempArray=[...this.personData];
        tempArray[this.selectedRow]={...response};
        this.personData=tempArray;
      };
    });
  }
  }

  onDeleteClick(){
    if(this.selectedRow!=null){
    const dialogRef=this.matDialog.open(DeleteCustomerComponent);
    dialogRef.afterClosed().subscribe(response => {
    if(response==true){
    this.customerService.deleteCustomer(this.personData[this.selectedRow].customerId).subscribe(response =>{
      const tempArray=[...this.personData];
      tempArray.splice(this.selectedRow,1);
      this.personData=tempArray;
      this.selectedRow=null;
    })
    }
  });
  }
  }

  ngOnDestroy(): void {
  }
}