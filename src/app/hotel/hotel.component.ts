import { Component, OnInit, OnDestroy } from '@angular/core';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit,OnDestroy {

  //inputValue:string = 'Testing';
  selectedRow:number;
  hotelData: any[]=[
    {'name':'Everest Hotel','vat':2233238,'address':'Kathmandu','available':false,'rating':null},
    {'name':'Soaltee Hotel','vat':12261,'address':'Chitwan','available':false,'rating':null},
    {'name':'Dwarika Hotel','vat':2546651,'address':'Pokhara','available':true,'rating':null},
    {'name':'Tiger Mountain Hotel','vat':12452,'address':'Dharan','available':false,'rating':null},
    {'name':'Hotel Yak and Yeti','vat':327857,'address':'Kathmandu','available':true,'rating':null}
  ];
  displayedColumns: string[] = ['name','vat', 'address','available','rating'];
  duration:any;
  constructor(private matDialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  // onButtonClick(){
  //   this.inputValue="Development";
  // }

  onRowClick(index)
  {
    this.selectedRow=index;
  }

  onAddClick(){
    const dialogRef=this.matDialog.open(HotelFormComponent);
    dialogRef.afterClosed().subscribe(response => {
      if(response){
      const tempArray =[...this.hotelData];
      console.log('new data',response);
      tempArray.unshift(response);
      this.hotelData=tempArray;
      const snackBarRef=this.snackBar.open("Hotel Added");
      }
      });
  }

  onEditClick(){
    if(this.selectedRow !=null){
    const dialogRef=this.matDialog.open(HotelFormComponent,{data:this.hotelData[this.selectedRow]});
    dialogRef.afterClosed().subscribe(response => {
      if(response){
        const tempArray=[...this.hotelData];
        tempArray[this.selectedRow]={...response};
        this.hotelData=tempArray;
        const snackBarRef=this.snackBar.open("Hotel Updated");
        this.selectedRow= null;
      }
    });
  }
  else{
    const snackBarRef=this.snackBar.open("Please Select Hotel");

  }
  }

  onDeleteClick(){
    if(this.selectedRow!=null){
    const dialogRef=this.matDialog.open(DeleteConfirmComponent);
    dialogRef.afterClosed().subscribe(response => {
    if(response==true){
      const tempArray=[...this.hotelData];
      tempArray.splice(this.selectedRow,1);
      this.hotelData=tempArray;
      const snackBarRef=this.snackBar.open("Hotel Deleted");
      this.selectedRow= null;
    }
  });
  }
  else{
    const snackBarRef=this.snackBar.open("Please Select Hotel");
  }
  }

  ngOnDestroy(): void {
  }

}
