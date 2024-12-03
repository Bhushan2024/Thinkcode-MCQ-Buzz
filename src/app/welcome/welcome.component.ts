import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public titleH3Text1ConfigProperties: any;
  public text12ConfigProperties: any;
  public text12FormValidation: any;
  public text23ConfigProperties: any;
  public text23FormValidation: any;
  public email1ConfigProperties: any;
  public email1FormValidation: any;
  public password1ConfigProperties: any;
  public password1FormValidation: any;
  public text34ConfigProperties: any;
  public text34FormValidation: any;
  public dropdowns1ConfigProperties: any;
  public dropdowns1FormValidation: any;
  public button1ConfigProperties: any;

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit() {
    this.titleH3Text1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black text-center mb-3',
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
    this.text12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '868df84d-91cd-447c-b794-6b1fca5d8d54',
      showLabel: true,
      displayName: 'First Name',
      type: 'text-input',
      placeHolder: 'Enter First Name',
      formControlName: 'text12FormControl',
      iterationKey: '',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputText',
      listChilds: [],
      styleType: '',
      variableName: 'text12ConfigProperties',
      listOfOptions: [],
    };
    this.text12FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.text23ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '5f38183e-757f-4675-92ca-7dd5cc5b6a1a',
      showLabel: true,
      displayName: 'Last Name',
      type: 'text-input',
      placeHolder: 'Enter Last Name',
      formControlName: 'text23FormControl',
      iterationKey: '',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputText',
      listChilds: [],
      styleType: '',
      variableName: 'text23ConfigProperties',
      listOfOptions: [],
    };
    this.text23FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
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
      displayName: 'Passward',
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
    this.text34ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '8cfb3c18-b134-4534-803d-161e029b0a0a',
      showLabel: true,
      displayName: 'Mobile Number',
      type: 'text-input',
      placeHolder: 'Enter Mobile Number',
      formControlName: 'text34FormControl',
      iterationKey: '',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputText',
      listChilds: [],
      styleType: '',
      variableName: 'text34ConfigProperties',
      listOfOptions: [],
    };
    this.text34FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.dropdowns1ConfigProperties = {
      helpText: '',
      styles: {
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        dropdownStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-rgb74-21-72-1 color-rgb255-255-255-1',
        optionsStyle: 'color-000000',
        dropdownComponentStyle: 'width-100-percent background-color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: '128730ad-c910-4f19-abac-51d2a86acd58',
      showLabel: true,
      displayName: 'Select Role',
      type: 'dropdown',
      placeHolder: 'Select Role',
      formControlName: 'dropdowns1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faCaretSquareDown',
      dropValue: '',
      dropDisplayName: '',
      listChilds: [],
      styleType: '',
      variableName: 'dropdowns1ConfigProperties',
      listOfOptions: [
        { displayName: 'Student', value: 'Student' },
        { displayName: 'Teacher', value: 'Teacher' },
      ],
    };
    this.dropdowns1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
      ],
    };
    this.button1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'padding-top-2-percent',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 padding-top-1-percent padding-bottom-1-percent width-100-percent background-color-rgb74-21-72-1 font-size-16 font-family-inherit font-weight-400 color-rgb255-255-255-1 mb-3',
      },
      isHidden: false,
      propertyName: 'aa88a93d-eff3-48e8-836b-83852a790723',
      showLabel: false,
      type: 'button',
      formControlName: 'button1FormControl',
      btnText: 'Register',
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

  text12Changed(event: any) {
    this.text12ConfigProperties = event;
  }
  text23Changed(event: any) {
    this.text23ConfigProperties = event;
  }
  email1Changed(event: any) {
    this.email1ConfigProperties = event;
  }
  password1Changed(event: any) {
    this.password1ConfigProperties = event;
  }
  text34Changed(event: any) {
    this.text34ConfigProperties = event;
  }
  dropdowns1Changed(event: any) {
    this.dropdowns1ConfigProperties = event;
  }
  button1submitForm() {

    const payload = {
      firstname: this.text12ConfigProperties.value,
      lastname:this.text23ConfigProperties.value,
      email: this.email1ConfigProperties.value,
      password: this.password1ConfigProperties.value,
      mobileno:this.text34ConfigProperties.value,
      role: this.dropdowns1ConfigProperties.value,
    };

    this.AuthService.register(payload).subscribe(
      (response) => {
        alert("Registration Successfully")
        this.router.navigate(['/login'])
        console.log('Success:', response);
      },
      (error) => {
        alert("Error while Registration")
        console.error('Error:', error);
      }
    );

  }
}
