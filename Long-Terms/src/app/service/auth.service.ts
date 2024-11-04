import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private timeout: any;
  private readonly timeoutDuration = 60 * 60 * 1000;


  baseApi = 'http://localhost:3000/user'

  constructor(private http : HttpClient , private router : Router) { }

getAll(){

  return this.http.get(this.baseApi);


}

getById(id : any){
  debugger
return this.http.get(this.baseApi+'/'+id);

}

registerData(inputData : any){

  return this.http.post(this.baseApi , inputData);
}

updateData(id: any , inputData : any){

return this.http.put(this.baseApi+'/'+id , inputData)

}

isLoggedIn(){
  return sessionStorage.getItem('username') != null;
}


getUserRole(){

  return sessionStorage.getItem('role')!= null ? sessionStorage.getItem('role')?.toString():''; 
}




login(){
this.starttimout();


}

logout(){
this.clearTimeout();
this.router.navigate(['login']);
}

private starttimout(){
  this.clearTimeout();
  this.timeout = setTimeout(() =>{

this.logout();
alert("your session has expired");
  } , this.timeoutDuration);

}

private clearTimeout(){

  if(this.timeout){

  clearTimeout(this.timeout);

  };



}
resetTimeout(){

  this.starttimout();
}

}
