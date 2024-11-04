import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserListingComponent } from '../user-listing/user-listing.component';
// import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData: any;

  constructor( private service : AuthService , private router : Router , private builder : FormBuilder , private toastr : ToastrService){

    sessionStorage.clear();
  }

  loginForm = this.builder.group({
    password : this.builder.control('',Validators.compose([Validators.required])),

id : this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)]))


  }) 

  login(){
    
   this.service.login();
    if (this.loginForm.valid){

      this.service.getById(this.loginForm.value.id).subscribe((res =>{

        this.userData = res;
       
        debugger
 
        if(this.userData.password == this.loginForm.value.password){

               if(this.userData.isActive){

                sessionStorage.setItem('id',this.userData.id);

                sessionStorage.setItem('role',this.userData.role);
              
                this.router.navigate(['home']);

               } else{

                this.toastr.error('please contact admin for actiavate')
               }

        } else{

        this.toastr.warning('please check credentials')

        }

console.log(this.userData)


      }
        ))

    }else{
this.toastr.warning('Please enter correct Credentials')

    }

  }

}
