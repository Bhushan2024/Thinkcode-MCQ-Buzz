import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AdminExamComponent } from './Admin/admin-exam/admin-exam.component';
import { AddExamComponent } from './Admin/add-exam/add-exam.component';
import { AdminSectionComponent } from './Admin/admin-section/admin-section.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { AdminResultComponent } from './Admin/admin-result/admin-result.component';
import { AdminDetailedResultsComponent } from './Admin/admin-detailed-results/admin-detailed-results.component';

const routes: Routes = [
  { path: 'user-dashboard', component: WelcomeComponent ,  canActivate: [AuthGuard]},
  { path: 'teacher-dashboard', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: WelcomeComponent },
  { path: 'admin-exam', component: AdminExamComponent, canActivate: [AuthGuard] },
  { path: 'add-exam', component: AddExamComponent, canActivate: [AuthGuard] },
  { path: 'admin-section/:examId', component: AdminSectionComponent, canActivate: [AuthGuard] },
  {path:'admin-dashboard', component:AdminDashboardComponent, canActivate: [AuthGuard]},
  {path:'admin-result', component:AdminResultComponent, canActivate: [AuthGuard]},
  {path:'detailed-results/:examId', component:AdminDetailedResultsComponent},


  { path: '**', redirectTo: 'admin-dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
