import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'initial-navbar',
  templateUrl: './initial-navbar.component.html',
  styleUrls: ['./initial-navbar.component.scss'],
})
export class InitialNavbarComponent implements OnInit {
  public titleH3Text12ConfigProperties: any;
  public subtitleText22ConfigProperties: any;
  public subtitleText33ConfigProperties: any;
  public button1ConfigProperties: any;
  public button12ConfigProperties: any;

  constructor() {}

  ngOnInit() {
    this.titleH3Text12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-rgb255-255-255-1 font-size-2rem font-weight-800',
      },
      isHidden: false,
      propertyName: 'ae9a070e-8e53-464f-b23c-4861eb626642',
      showLabel: false,
      type: 'title-h3-text',
      value: 'MCQBuzz',
      formControlName: 'titleH3Text12FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faH3',
      listChilds: [],
      styleType: '',
      variableName: 'titleH3Text12ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText22ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-rgb255-255-255-1 font-size-12rem font-weight-600',
      },
      isHidden: false,
      propertyName: 'b4130dfc-6629-4f8b-85b6-f8f8d4b43441',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Contact',
      formControlName: 'subtitleText22FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText22ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText33ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-rgb255-255-255-1 font-size-12rem font-weight-600',
      },
      isHidden: false,
      propertyName: '4bf50d85-f809-4b1d-923d-b9a1e39cbe77',
      showLabel: false,
      type: 'subtitle-text',
      value: 'About Us',
      formControlName: 'subtitleText33FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText33ConfigProperties',
      listOfOptions: [],
    };
    this.button1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'text-align-center',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-05rem border-width-1 font-size-11rem font-weight-600 color-000000',
      },
      isHidden: false,
      propertyName: 'a0d8b928-4d66-4aa1-86d8-3712325410f7',
      showLabel: false,
      type: 'button',
      formControlName: 'button1FormControl',
      btnText: 'Login',
      btnType: 'button',
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
    this.button12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-05rem border-width-1 font-size-11rem font-weight-600 color-000000',
      },
      isHidden: false,
      propertyName: '7733989b-f633-42bf-a8d9-ac5fa707f6e4',
      showLabel: false,
      type: 'button',
      formControlName: 'button12FormControl',
      btnText: 'Signup',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button12ConfigProperties',
      listOfOptions: [],
    };
  }

  button1submitForm() {
    
  }
  button12submitForm() {}
}
