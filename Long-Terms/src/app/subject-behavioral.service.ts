import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectBehavioralService {

  // public notificationSubject = new Subject<any>();
  public notificationSubject = new BehaviorSubject<any>('Greating from ep');


  constructor() { }

  sendNotification(data : any){
    debugger

    this.notificationSubject.next(data);
    console.log(data.value, "subjct value from sender component")
  }
}
