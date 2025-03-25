import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = sessionStorage.getItem('jwtToken'); // Get token from storage
    // console.log("Token from sessionStorage:", token);

    if (!token) {
      console.warn("No token found in sessionStorage!");
      return next.handle(req); // Continue without token
    }

    // Clone request and add token
    const clonedReq = req.clone({
      setHeaders: {
        Jwttoken: token // Ensure header matches API expectation
      }
    });

    return next.handle(clonedReq);
  }
}
