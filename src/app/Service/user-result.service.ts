import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserResultService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getUserResults(userId:any):Observable<any>{
    const url = this.buildUrl(`v1/ExamResult/GetUserExamResults?userId=${encodeURIComponent(userId)}`);
    return this.http.get(url,{headers: this.getHeaders()})
  }
}
