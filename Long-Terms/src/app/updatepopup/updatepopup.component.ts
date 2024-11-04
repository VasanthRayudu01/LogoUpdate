import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
// import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'],
  // imports: ['ReactiveFormsModule]
})
export class UpdatepopupComponent {

  selectColor = "lightBlue";

  constructor( private formBuilder : FormBuilder
    , private service : AuthService  ,
     private toastr : ToastrService ,
     private router : Router){

  }

  userData: any;

  FormBuilder: any;
  profileForm = this.formBuilder.group({
    name: [''],
    userid: [''],
    email : [''],
    gender : [''],
    role : [''],
    // // address: this.formBuilder.group({
    // //   street: [''],
    // //   city: [''],
    // //   state: [''],
    // //   zip: [''],
    // }),
  });
 

  ngOnInit(): void {
    this.userDetail();

    
  }

  onSubmit() {
    debugger
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    console.log(this.profileForm)

  }
 

  userDetail(){
    debugger
     const username = sessionStorage.getItem('id');
     console.log('headde', username);
    this.service.getById(username) 
    .subscribe((res =>{

      this.userData = res;
      // this.formArray = this.userData;
      console.log('usernamefor ', this.userData)
      // console.log('formarray', this.formArray)

      this.profileForm.patchValue({
      name : this.userData.name,
      userid : this.userData.id,
      email : this.userData.email,
      gender : this.userData.gender,
      role : this.userData.role

      })
  }
    ))



  }

  UpdateDetails(){
   
    debugger
    return this.service.updateData(this.userData.id , this.profileForm.value).subscribe(( res => {

      this.toastr.success("User Data Updated")
      this.router.navigate(['home'])
         
    
    } 
    
    ));
  }


}
