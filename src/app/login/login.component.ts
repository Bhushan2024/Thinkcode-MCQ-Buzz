import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public titleH3Text1ConfigProperties: any;
  public email1ConfigProperties: any;
  public email1FormValidation: any;
  public password1ConfigProperties: any;
  public password1FormValidation: any;
  public button1ConfigProperties: any;

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    this.titleH3Text1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'fb178bea-27a4-4b2b-9e0c-690ca39f9b78',
      showLabel: false,
      type: 'title-h3-text',
      value: 'Register to Start your Journey',
      formControlName: 'titleH3Text1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faH3',
      listChilds: [],
      styleType: '',
      variableName: 'titleH3Text1ConfigProperties',
      listOfOptions: [],
    };
    this.email1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '8c79b626-f576-4fae-b213-fd46d3260c81',
      showLabel: true,
      displayName: 'Email',
      type: 'email-input',
      placeHolder: 'Enter Email',
      formControlName: 'email1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faEnvelope',
      listChilds: [],
      styleType: '',
      variableName: 'email1ConfigProperties',
      listOfOptions: [],
    };
    this.email1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'email' },
      ],
    };
    this.password1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '4d5b2c34-913a-4af9-a88b-6cf608e561e6',
      showLabel: true,
      displayName: 'Password',
      type: 'password-input',
      placeHolder: 'Enter Strong Passward',
      formControlName: 'password1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faLock',
      listChilds: [],
      styleType: '',
      variableName: 'password1ConfigProperties',
      listOfOptions: [],
    };
    this.password1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };

    this.button1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'padding-top-2-percent',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1  width-100-percent background-color-rgb74-21-72-1 font-size-15rem font-family-inherit font-weight-600 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: 'aa88a93d-eff3-48e8-836b-83852a790723',
      showLabel: false,
      type: 'button',
      formControlName: 'button1FormControl',
      btnText: 'Login',
      btnType: 'submit',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button1ConfigProperties',
      listOfOptions: [],
    };
  }

  email1Changed(event: any) {
    this.email1ConfigProperties = event;
  }
  password1Changed(event: any) {
    this.password1ConfigProperties = event;
  }
  
  button1submitForm() {
    const payload = {
      email: this.email1ConfigProperties.value,
      password: this.password1ConfigProperties.value,
    };

    this.AuthService.login(payload).subscribe(
      (response) => {
        // Save token and role in localStorage
        localStorage.setItem('currentUserRole', response.role);
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('currentUserId', response.userId);
        sessionStorage.setItem('email', response.email)

        // Redirect based on role
        if (response.role === 'Student') {
          this.router.navigate(['/student-dashboard']);
        } else if (response.role === 'Teacher') {
          this.router.navigate(['/admin-dashboard']);
        } else {
          alert('Unrecognized role. Contact support.');
        }

        console.log('Login successful:', response);
      },
      (error) => {
        alert('Error while logging in');
        console.error('Error:', error);
      }
    );
  }
}
