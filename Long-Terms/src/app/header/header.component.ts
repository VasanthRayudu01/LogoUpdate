import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username: any;
  userData : any;
  // name : any;

  constructor( private router : Router,
               private service :  AuthService){

  }

  ngOnInit(): void {
    this.userDetail();
    
  }

  logOut(){
    // debugger;
  
      this.router.navigate(['login']);

  }

  

  userDetail(){
    debugger
     const username = sessionStorage.getItem('id');
     console.log('headde', username)
    this.service.getById(username).subscribe((res =>{

      this.userData = res;
      console.log('usernamefor ', this.userData)
      // let name = this.userData.name;
  }
    ))



  }

 }

