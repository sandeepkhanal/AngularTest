import { CustomerFormComponent } from './customer-form/customer-form.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit,OnDestroy {
  
  selectedRow:number;
  myCustomer = 'Tim';
  personData: any[]=[
    {'name':'Tom','age':22,'address':'NY'},
    {'name':'Shyam','age':12,'address':'MN'},
    {'name':'Hari','age':25,'address':'FL'},
    {'name':'Jerry','age':1,'address':'NE'},
    {'name':'Sushant','age':32,'address':'NY'}
  ];
  displayedColumns: string[] = ['name','age', 'address'];

  receivedMessage:string;
  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    
  }

  onRowClick(index){
    //this.myCustomer=data.name;
    this.selectedRow=index;
  }

  onMessageReceive(event){
    this.receivedMessage=event;
  }

  onAddClick(){
    const dialogRef=this.matDialog.open(CustomerFormComponent);
    dialogRef.afterClosed().subscribe(response => {
      if(response){
      const tempArray =[...this.personData];
      console.log('new data',response);
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
    const tempArray=[...this.personData];
    tempArray.splice(this.selectedRow,1);
    this.personData=tempArray;
    console.log('hey');
    }
  }


  ngOnDestroy(): void {
  }
}