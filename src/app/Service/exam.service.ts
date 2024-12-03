import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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
  getSectionsByExamId(ExamId: number): Observable<any> {
    const url = `${this.buildUrl('v1/Section/getSectionsByExamId')}?ExamId=${ExamId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  GetSectionDetails(SectionId: number): Observable<any> {
    const url = `${this.buildUrl('v1/Section/GetSectionDetails')}?sectionId=${SectionId}`;
    return this.http.get(url, { headers: this.getHeaders() });
  }
  GetExamDataByUserId(teacherId: string): Observable<any> {
    const url = this.buildUrl('v1/Exam/GetExamDataByUserId');
    return this.http.post(url, JSON.stringify(teacherId), { headers: this.getHeaders() });
  }
  addQuestionWithOptions(QuestionData: any): Observable<any> {
    const url = this.buildUrl('v1/Question/addQuestionWithOptions');
    return this.http.post(url, JSON.stringify(QuestionData), { headers: this.getHeaders() });
  }
  addQuestionWithOptions2(QuestionData: any): Observable<HttpResponse<any>> {
    const url = this.buildUrl('v1/Question/addQuestionWithOptions');
    return this.http.post<any>(url, JSON.stringify(QuestionData), { headers: this.getHeaders() });
  }
  GetExamResultsByExamId(ExamId: any): Observable<HttpResponse<any>> {
    const url = this.buildUrl('v1/ExamResult/GetExamResultsByExamId');
    return this.http.post<any>(url, ExamId, { headers: this.getHeaders() });
  }
  
}
