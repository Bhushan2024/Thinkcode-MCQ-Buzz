import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TitleH3TextComponent } from './shared/components/title-h3-text/title-h3-text.component';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { EmailInputComponent } from './shared/components/email-input/email-input.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ButtonComponent } from './shared/components/button-component/button-component.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AdminExamComponent } from './Admin/admin-exam/admin-exam.component';
import { CardComponent } from './shared/components 1/card/card.component';
import { SubtitleTextComponent } from './shared/components 1/subtitle-text/subtitle-text.component';
import { BodyTextComponent } from './shared/components 1/body-text/body-text.component';
import { ProjectionTemplate } from './shared/utilities/commmon-utilities/commmon-utilities';
import { AddExamComponent } from './Admin/add-exam/add-exam.component';
import { TextareaComponent } from './shared/components/text-area/text-area.component';
import { DatepickerInputComponent } from './shared/components/date-picker/date-picker.component';
import { NumberInputComponent } from './shared/components/number-input/number-input.component';
import { CheckBoxComponent } from './shared/components/check-box/check-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



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
    SubtitleTextComponent,
    BodyTextComponent,

    AddExamComponent,
    TextareaComponent,
    DatepickerInputComponent,
    NumberInputComponent,
    CheckBoxComponent,


    AppComponent,
    AddExamComponent,
    TitleH3TextComponent,
    TextInputComponent,
    TextareaComponent,
    DatepickerInputComponent,
    NumberInputComponent,
    CheckBoxComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, CommonModule, NgSelectModule, HttpClientModule, ProjectionTemplate,
    BsDatepickerModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
