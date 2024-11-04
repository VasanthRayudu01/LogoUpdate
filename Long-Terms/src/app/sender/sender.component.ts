import { Component } from '@angular/core';
import { SubjectBehavioralService } from '../subject-behavioral.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  constructor( private subjS : SubjectBehavioralService){

  }

  currentMessage : string = "";

  ngOnInit() : void {
    
    this.subjS.notificationSubject.subscribe( d =>{

   this.currentMessage = d.value;

    })

  } 


  
  sendmessage(data: any){
  this.subjS.sendNotification(data);
  }

}
