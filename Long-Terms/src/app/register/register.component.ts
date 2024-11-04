import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  
  // parentData : String = '';
  parentData: string = '';
  childOutputData: string = '';

  onChildOutput(data: string) {
    this.childOutputData = data;
  }

  constructor(private builder : FormBuilder, private toastr : ToastrService , private service : AuthService , private router : Router ){

  }

  registerForm = this.builder.group({

    id : this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),

    name : this.builder.control('', Validators.required),

    password : this.builder.control('',Validators.required),

    email : this.builder.control('',Validators.compose([Validators.required,Validators.email])),

    gender : this.builder.control('male'),

    role : this.builder.control(''),

    isActive : this.builder.control(false)




  }

 


  )

  
  registration(){
    console.log(this.registerForm);

    if(this.registerForm.valid){
    
      this.service.registerData(this.registerForm.value).subscribe( (res =>{

        this.toastr.success('please contact admin for access');

        this.router.navigate(['login']);

      }))

    } else{

      this.toastr.warning("enter valid data")


    }


  }

}
