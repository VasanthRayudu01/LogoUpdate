import { Component, DoCheck } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
 
  title = 'Long-Terms';

  isMenuRequire = false ;

  constructor(private router : Router){

  }

  ngDoCheck(): void {


    let currentUrl = this.router.url;

    if(currentUrl == '/login' || currentUrl == '/register'){

      this.isMenuRequire = false;
    } else {
      this.isMenuRequire = true;
    } 
  }


  logOut(){
    // debugger;
  
      this.router.navigate(['login']);

  }
}
