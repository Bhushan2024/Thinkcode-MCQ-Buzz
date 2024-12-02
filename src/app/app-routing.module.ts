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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'user-dashboard', component: WelcomeComponent,canActivate: [AuthGuard] }, 
  { path: 'teacher-dashboard', component: WelcomeComponent,canActivate: [AuthGuard]  }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: WelcomeComponent }, 
  { path: 'admin-exam', component: AdminExamComponent,canActivate: [AuthGuard]  }, 
  { path: 'add-exam', component: AddExamComponent,canActivate: [AuthGuard]  }, 
  { path: 'exams', component: UpcomingExamsComponent,canActivate: [AuthGuard] }, 
  { path: 'exam-questions', component: ExamQuestionComponent,canActivate: [AuthGuard]  }, 
  { path: 'exam-results', component: ExamResultComponent,canActivate: [AuthGuard]  }, 
  { path: 'exam-history', component: ExamHistoryComponent,canActivate: [AuthGuard]  }, 
  { path: 'student-dashboard', component: StudentDashboardComponent,canActivate: [AuthGuard]  },
  { path: 'admin-dashboard', component: AdminDashboardComponent,canActivate: [AuthGuard]  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
