import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgIf } from '@angular/common';
import { BackgroundColorDirective } from '../background-color.directive';
import { SenderComponent } from '../sender/sender.component';
import { Observable, Subscription ,filter} from 'rxjs';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})

export class UserListingComponent implements OnInit {
   selectedColor2 : string = "";
  selectedColor : any = "";
  // promise: any;

  // private mysubscription : Subscription ;
  onColorSelected( color : string){
   
    this.selectedColor = color;

  }

 @Input() value: number = 0;
 @Output() valuechange = new EventEmitter<number>();


incriment(){
  debugger
  
this.value += 1;

this.valuechange.emit(this.value);
this.router.navigate(['home']);



}
 
  headArray = ['name','id','email', 'gender', 'role'];
  
  userList  :any [] = [];
  userData : any;
//  "Id" : number;
 password : any;
 

  constructor(private service : AuthService ,private formBuilder : FormBuilder , private router : Router , private toastr : ToastrService ){


  }

  userData2 = [{
     "name" : "vasanth" , "password" : "vasanth123"}
];




  // formBuilder : any;
  userform = this.formBuilder.group({
  name : [''],
  password : ['']

  });

  set( ) {

    debugger
    // 
console.log(this.userform.value, "this edava")   
if(this.userform.value.name === this.userData2[0].name && this.userform.value.password === this.userData2[0].password){

  this.router.navigate(['home']);
  
 } else{
      this.toastr.error("invalid data")

 }




}
//  
toUserDetais(){
   
}
  ngOnInit(): void {

    //Promise3 example created only no effect for ui

    const promise = new Promise(resolve =>{
   
     setTimeout( ()=>{
      
      resolve("promise successfully delivered");
      resolve("promise successfully delivered1")
      resolve("promise successfully delivered2")
      resolve("promise successfully delivered3")

     },1000)
    });

    // promise.then(result => console.log(result))


    //observable example created only no effect for ui

    const observable = new Observable(subsribe =>{
        //  let counter = 0;
       setTimeout(()=>{
          
          // counter = counter+1 ;
          // subsribe.next(counter);
        subsribe.next("observable successfully delivered");
        subsribe.next("observable successfully delivered1");
        subsribe.next("observable successfully delivered2");
        subsribe.next("observable successfully delivered3");
       },1000)
    });

   observable.pipe(
     filter(d => d === "observable successfully delivered2" )).subscribe(result => console.log(result))

  


    this.getUsers();

    console.log("userdet" , this.userform);
    console.log("userdet" , this.userform.value);
    
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

      // this.profileForm.patchValue({
      // name : this.userData.name,
      // userid : this.userData.id,
      // email : this.userData.email,
      // gender : this.userData.gender,
      // role : this.userData.role

      // })
  }
    ))



  }



  getUsers(){

    this.service.getAll().subscribe((result : any) =>{

         this.userList = result;

         console.log(this.userList,'UserList')

    })
  }

  
 
  

  isActive : boolean = false;

  get styles(){
    return{
  "background-color" : this.isActive ? 'lightblue' : 'lightGreen',
  "font-weight" : this.isActive ? 'bold': 'normal'

    }
  }


    toggleActive(){

      this.isActive = !this.isActive;
    }

     

    // ngOnDestroy(): void {
    //   this.mysubscription.unsubscribe();
    // }
   



  }





