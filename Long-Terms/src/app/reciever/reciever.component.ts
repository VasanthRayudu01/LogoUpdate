import { Component } from '@angular/core';
import { SubjectBehavioralService } from '../subject-behavioral.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.css']
})
export class RecieverComponent {
  constructor( private subS : SubjectBehavioralService){


  }
  recivemessage : string = "";

 ngOnInit(): void {
  debugger

  this.subS.notificationSubject.subscribe( d => {

  this.recivemessage = d.value;

  });

 }

}
