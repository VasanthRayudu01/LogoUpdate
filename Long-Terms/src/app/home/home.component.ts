import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   initialvalue : number = 0;

  Updatedvalue :number = 0 ;

  ngOnInit(): void {
// this.recieveMesage;
    
  }


  recieveUpdatedValue(value : number){
        
this.Updatedvalue = value;

  }

//   recieveMesage(messageEvent : number){
//     debugger

// this.Updatedvalue = messageEvent;

//   }



}
