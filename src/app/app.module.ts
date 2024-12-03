import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleH3TextComponent } from './shared/components/title-h3-text/title-h3-text.component';
import { CommonModule, DatePipe } from '@angular/common';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { EmailInputComponent } from './shared/components/email-input/email-input.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonComponent } from './shared/components/button-component/button-component.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminExamComponent } from './Admin/admin-exam/admin-exam.component';
import { CardComponent } from './shared/components/card/card.component';
import { SubtitleTextComponent } from './shared/components/subtitle-text/subtitle-text.component';
import { BodyTextComponent } from './shared/components/body-text/body-text.component';
import { ProjectionTemplate } from './shared/utilities/commmon-utilities/commmon-utilities';
import { AddExamComponent } from './Admin/add-exam/add-exam.component';
import { TextareaComponent } from './shared/components/text-area/text-area.component';
import { DatepickerInputComponent } from './shared/components/date-picker/date-picker.component';
import { NumberInputComponent } from './shared/components/number-input/number-input.component';
import { CheckBoxComponent } from './shared/components/check-box/check-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddSectionComponent } from './Admin/add-section/add-section.component';
import { AdminSectionComponent } from './Admin/admin-section/admin-section.component';
import { PopupComponent } from './shared/components/popup/popup.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { InitialNavbarComponent } from './shared/initial-navbar/initial-navbar/initial-navbar.component';
import { AuthInterceptor } from './interceptor/exam.interceptor';
import { SupportingTextComponent } from './shared/components/supporting-text/supporting-text.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { IconComponent } from './shared/components/icon/icon.component';
import { LinkTextComponent } from './shared/components/link-text/link-text.component';
import { AdminResultComponent } from './Admin/admin-result/admin-result.component';
import { DataGridComponent } from './shared/components/data-grid/data-grid.component';
import { DataGridSideDrawerComponent } from './shared/components/data-grid-side-drawer/data-grid-side-drawer.component';
import { AgGridModule } from 'ag-grid-angular';
import { AdminDetailedResultsComponent } from './Admin/admin-detailed-results/admin-detailed-results.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TitleH3TextComponent,
    TextInputComponent,
    EmailInputComponent,
    PasswordInputComponent,
    DropdownComponent,
    ButtonComponent,
    LoginComponent,
    AdminExamComponent,
    CardComponent,
    BodyTextComponent,
    AddExamComponent,
    TextareaComponent,
    DatepickerInputComponent,
    NumberInputComponent,
    CheckBoxComponent,
    AppComponent,
    AddExamComponent,
    TextInputComponent,
    TextareaComponent,
    DatepickerInputComponent,
    NumberInputComponent,
    CheckBoxComponent,
    AddSectionComponent,
    AdminSectionComponent,
    PopupComponent,
    InitialNavbarComponent,
    SupportingTextComponent,
    AdminDashboardComponent,
    IconComponent,
    LinkTextComponent,
    AdminResultComponent,
    AdminDetailedResultsComponent,
    DataGridComponent,
    DataGridSideDrawerComponent,
    SubtitleTextComponent,
    AdminDetailedResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgSelectModule,
    HttpClientModule,
    ProjectionTemplate,
    BsDatepickerModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    AgGridModule,

  ],
  providers: [DatePipe,
    BsModalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // Allows multiple interceptors if needed
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
