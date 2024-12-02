import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'new-sidebar',
  templateUrl: './new-sidebar.component.html',
  styleUrls: ['./new-sidebar.component.scss'],
})
export class NewSidebarComponent implements OnInit {
  public subtitleText11ConfigProperties: any;
  public button21ConfigProperties: any;
  public button22ConfigProperties: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subtitleText11ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-size-16rem font-weight-600 margin-top-20-percent',
      },
      isHidden: false,
      propertyName: '023d4010-df69-4c0f-9e48-38c124aba446',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Student Dashboard',
      formControlName: 'subtitleText11FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText11ConfigProperties',
      listOfOptions: [],
    };
    this.button21ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-0 font-size-11rem font-weight-400 color-rgb74-21-72-1 width-10rem text-align-left m-1',
      },
      isHidden: false,
      propertyName: '74eddaf5-4cc2-4ddd-b4e1-f79c7b38167c',
      showLabel: false,
      type: 'button',
      formControlName: 'button21FormControl',
      btnText: 'Upcoming Exams',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button21ConfigProperties',
      listOfOptions: [],
    };
    this.button22ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-0 font-size-1rem font-weight-400 color-rgb74-21-72-1 width-10rem text-align-left m-1',
      },
      isHidden: false,
      propertyName: 'c95612af-6268-48a0-8c0e-0da3cf45a8b1',
      showLabel: false,
      type: 'button',
      formControlName: 'button22FormControl',
      btnText: 'Results',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button22ConfigProperties',
      listOfOptions: [],
    };
  }

  button21submitForm() {
    this.router.navigate(['/exams'])
  }
  button22submitForm() {
    this.router.navigate(['/exam-history'])
  }
}
