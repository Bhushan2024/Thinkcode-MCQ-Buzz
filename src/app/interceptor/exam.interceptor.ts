import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      console.log('Token being sent:', token);
      console.log('Request:', cloned);

      return next.handle(cloned).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('Error caught in interceptor:', error);

          if (error.status === 403) {
            console.error('Forbidden - redirecting to unauthorized page');
            this.router.navigate(['/unauthorized']);
          } else if (error.status === 401) {
            console.error('Unauthorized - redirecting to login page');
            this.router.navigate(['/login']);
          } else if (error.status === 0) {
            console.error('CORS or Network Error:', error);
          }

          return throwError(() => new Error(error.message));
        }),
      );
    } else {
      return next.handle(req).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log('Error caught in interceptor:', error);

          if (error.status === 401) {
            console.error('Unauthorized - redirecting to login page');
            this.router.navigate(['/login']);
          } else if (error.status === 0) {
            console.error('CORS or Network Error:', error);
          }

          return throwError(() => new Error(error.message));
        }),
      );
    }
  }
}
