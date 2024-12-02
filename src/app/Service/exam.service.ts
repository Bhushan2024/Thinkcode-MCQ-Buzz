import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'; 

@Injectable({
  providedIn: 'root',
})
export class ExamService {
  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  private buildUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  getActiveExams(): Observable<any> {
    const url = this.buildUrl('v1/Exam/GetActiveExams');
    return this.http.get(url, { headers: this.getHeaders() });
  }

  getExamsByTeacherId(teacherId: string): Observable<any> {
    const url = this.buildUrl(`v1/Exam/GetExamsByTeacherId?TeacherId=${encodeURIComponent(teacherId)}`);
    return this.http.get(url, { headers: this.getHeaders() });
  }
  AddExam(Examdata: any): Observable<any> {
    const url = this.buildUrl('v1/Exam/AddExam');
    return this.http.post(url, JSON.stringify(Examdata), { headers: this.getHeaders() });
  }
  AddSection(Examdata: any): Observable<any> {
    const url = this.buildUrl('v1/Section/AddSection');
    return this.http.post(url, JSON.stringify(Examdata), { headers: this.getHeaders() });
  }
  
  GetAllExams():Observable<any>{
    const url = this.buildUrl('v1/Exam/GetAllExam');
    return this.http.post(url,null, {headers: this.getHeaders()})
  }

  GetExamByExamId(examId:number):Observable<any>{
    console.log(examId)
   const url = this.buildUrl(`v1/Exam/GetExamWithDetails/${examId}`);
   return this.http.get(url,{headers: this.getHeaders()})
  }

  AddUserExam(payload:any):Observable<any>{
    const url = this.buildUrl(`v1/UserExam/AddUserExam`);
    console.log("in service"+payload)
    return this.http.post(url,payload,{headers: this.getHeaders()})
  }

  GenerateSectionResult(sectionId:number, userExamId:number){
    const url = this.buildUrl(`v1/SectionResult/GenerateSectionResult?sectionId=${encodeURIComponent(sectionId)}&userExamId=${encodeURIComponent(userExamId)}`);
    return this.http.post(url,null,{headers: this.getHeaders()})
  }

  CalculateAndCreateExamResult(userExamId:number){
    console.log('lefhvfkjehv')
    const url = this.buildUrl(`v1/ExamResult/CalculateAndCreateExamResult?userExamId=${encodeURIComponent(userExamId)}`);
    return this.http.get(url,{headers: this.getHeaders()})
  }
}
