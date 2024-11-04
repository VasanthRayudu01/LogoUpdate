import { Injectable } from "@angular/core";
import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorServiece implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const modifiedRequest = req.clone({headers : req.headers.append('auth' , 'Vasanth')})
        console.log('interceptor being called')

        return next.handle(modifiedRequest).pipe(tap((event) =>{
//    const myCustomResponse = event.type.toString
              if(event.type === HttpEventType.Response){
                console.log(event.body, "Response event");
                
                
        //    return event.clone({
        //             body: 'myCustomResponse'
        //        })

              }

        }  ))
        
    }



}