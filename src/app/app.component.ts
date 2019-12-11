import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTest';

  constructor(private router: Router ) {
  }
  

 show :boolean;

  menuData: any[]=[
    {item:'HOTEL',path:'hotel',icon:'hotel'},
    {item:'CUSTOMER',path:'customer',icon:'people'}
  ];

  CheckRoute(){
    const routerUrl =this.router.url;
    if (routerUrl == 'menuData.path'){
      this.show=true;
      console.log(this.show)
    }

  }
}

