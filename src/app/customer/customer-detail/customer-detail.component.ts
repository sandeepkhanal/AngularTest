import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {

  @Input() customerName:string;
  @Output() message:EventEmitter<string>;
  constructor() { 
    this.message= new EventEmitter();
  }

  ngOnInit() {
  }

  onButtonClick()
  {
    this.message.emit('What"s up');
  }
}
