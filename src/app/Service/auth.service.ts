import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

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
    return this.http.post(url, JSON.stringify(questionData), { headers: this.getHeaders() });
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    const url = this.buildUrl(endpoint);
    return this.http.post<T>(url, JSON.stringify(data), { headers: this.getHeaders() });
  }

  get<T>(endpoint: string): Observable<T> {
    const url = this.buildUrl(endpoint);
    return this.http.get<T>(url, { headers: this.getHeaders() });
  }
}
