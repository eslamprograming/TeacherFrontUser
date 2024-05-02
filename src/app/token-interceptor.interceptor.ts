import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ url: `https://education.somee.com/${request.url}` });
    // Get the token from your authentication service
    
    const token = localStorage.getItem("token"); // Replace this with your actual token

    // Clone the request and add the token to the headers
    const authRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Pass the cloned request to the next interceptor or the HttpClient
    return next.handle(authRequest);
  }
}
