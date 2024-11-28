import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component'; 
import { AdminExamComponent } from './Admin/admin-exam/admin-exam.component';
import { AddExamComponent } from './Admin/add-exam/add-exam.component';
import { UpcomingExamsComponent } from './User/upcoming-exams/upcoming-exams.component';
import { ExamQuestionComponent } from './User/exam-question/exam-question.component';
import { ExamResultComponent } from './User/exam-result/exam-result.component';
import { ExamHistoryComponent } from './User/exam-history/exam-history.component';
import { StudentDashboardComponent } from './User/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  { path: 'user-dashboard', component: WelcomeComponent }, 
  { path: 'teacher-dashboard', component: WelcomeComponent }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: WelcomeComponent }, 
  { path: 'admin-exam', component: AdminExamComponent }, 
  { path: 'add-exam', component: AddExamComponent }, 
  { path: 'exams', component: UpcomingExamsComponent}, 
  { path: 'exam-questions', component: ExamQuestionComponent }, 
  { path: 'exam-results', component: ExamResultComponent }, 
  { path: 'exam-history', component: ExamHistoryComponent }, 
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
