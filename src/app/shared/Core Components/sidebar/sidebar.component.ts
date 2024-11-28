import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public subtitleText12ConfigProperties: any;
  public subtitleText23ConfigProperties: any;
  public subtitleText34ConfigProperties: any;

  constructor() {}

  ngOnInit() {
    this.subtitleText12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-size-14rem font-weight-600 margin-top-6rem',
      },
      isHidden: false,
      propertyName: '01d4ebb4-2ee1-4c13-87c0-f2fff7c82f9b',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Student Dashboard',
      formControlName: 'subtitleText12FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText12ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText23ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-1rem p-1',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-size-11rem',
      },
      isHidden: false,
      propertyName: '757ded02-f8fd-4720-8422-0175d21b3173',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Upcoming Exams',
      formControlName: 'subtitleText23FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText23ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText34ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'p-1',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-size-11rem',
      },
      isHidden: false,
      propertyName: 'ac45265e-1128-4449-9058-15c4b2818571',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Exam History',
      formControlName: 'subtitleText34FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText34ConfigProperties',
      listOfOptions: [],
    };
  }
}
