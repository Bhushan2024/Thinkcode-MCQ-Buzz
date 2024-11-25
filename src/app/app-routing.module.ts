import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AdminExamComponent } from './Admin/admin-exam/admin-exam.component';
import { AddExamComponent } from './Admin/add-exam/add-exam.component';
import { AdminSectionComponent } from './Admin/admin-section/admin-section.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'user-dashboard', component: WelcomeComponent },
  { path: 'teacher-dashboard', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: WelcomeComponent },
  { path: 'admin-exam', component: AdminExamComponent, canActivate: [AuthGuard] },
  { path: 'add-exam', component: AddExamComponent, canActivate: [AuthGuard] },
  { path: 'admin-section/:examId', component: AdminSectionComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
