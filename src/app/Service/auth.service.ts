import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { response } from 'express';
 
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  private token: string | null = null;
 
  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('authToken');
    console.log("Token "+this.token)
  }
 
  get isLoggedIn(): boolean {
    var token=localStorage.getItem('authToken');
    return token !== null;
  }
 
  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
 
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }
 
  register(questionData: any): Observable<any> {
    const url = this.buildUrl('v1/Auth/register');
    return this.http.post(url, JSON.stringify(questionData), { headers: this.getHeaders() });
  }
 
  login(questionData: any): Observable<any> {
    const url = this.buildUrl('v1/Auth/login');
    return this.http.post<any>(url, JSON.stringify(questionData), { headers: this.getHeaders() }).pipe(
      tap(response=>{
        localStorage.setItem('currentUserRole', response.role);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('currentUserId', response.userId);
      }
    ));
 
  }
  // login(email: string, password: string): Observable<LoggedInUser> {
  //   return this.http.post<LoggedInUser>(`${this.baseUrl}/login`, { email, password }).pipe(
  //     tap(response => {
  //       // Save the token and user details in localStorage and in the service
  //       this.token = response.token ? response.token : '';
  //       localStorage.setItem('exam_token', `${this.token}`);
  //       localStorage.setItem('currentExamUser', JSON.stringify(response));
  //     })
  //   );
  // }
 
  post<T>(endpoint: string, data: any): Observable<T> {
    const url = this.buildUrl(endpoint);
    return this.http.post<T>(url, JSON.stringify(data), { headers: this.getHeaders() });
  }
 
  get<T>(endpoint: string): Observable<T> {
    const url = this.buildUrl(endpoint);
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }
  // Add a method to retrieve the logged-in user details from localStorage
  getLoggedInUser(): any | null {
    const userJson = localStorage.getItem('currentExamUser');
    return userJson ? JSON.parse(userJson) : null;
  }
 
  logout(): void {
    this.token = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUserId');
    localStorage.removeItem('currentUserRole');
  }
}