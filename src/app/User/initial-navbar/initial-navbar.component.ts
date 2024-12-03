import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, Event  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'initial-navbar',
  templateUrl: './initial-navbar.component.html',
  styleUrls: ['./initial-navbar.component.scss'],
})
export class InitialNavbarComponent implements OnInit {
  public titleH3Text12ConfigProperties: any;
  public subtitleText22ConfigProperties: any;
  public subtitleText44ConfigProperties: any;
  public subtitleText55ConfigProperties: any;
  public subtitleText66ConfigProperties: any;
  public subtitleText33ConfigProperties: any;
  public button1ConfigProperties: any;
  public button12ConfigProperties: any;
  public button13ConfigProperties: any;
  public hideElementForSpecificRoute: boolean = false;
  public hideElementForStudentRoute: boolean = false;
  public showElementForSpecificRoute: boolean=false;
  public hideElementForCore : boolean=false;
  public divClass = 'col-lg-4'; // Default class
  public routesForStudent:any[]=[]
  public routesForAdmin:any[]=[]
  public routesForInitial:any[]=[]
  public showElementForSignup:boolean=false;
  public showElementForLogin:boolean=false;

  constructor(private router: Router) {}

  ngOnInit() {
    const routesToHideElement = ['/exam-question', '/exams', '/exam-history','/exam-results','/student-dashboard','/user-dashboard','/login','/register'];
    const routesToHideCore = ['/login','/register']

    this.routesForStudent=['/exam-question', '/exams', '/exam-history','/exam-results','/student-dashboard','/user-dashboard','/login','/register']
    this.routesForAdmin=['admin-exam','/add-exam','admin-dashboard','/teacher-dashboard']
    this.routesForInitial=['/login','/register']
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        // Hide elements for 'exam-question' route
        this.hideElementForSpecificRoute = event.url.includes('/exam-question');
        this.hideElementForStudentRoute = routesToHideElement.some(route => event.url.includes(route));
        this.showElementForSpecificRoute= this.routesForInitial.some(route=>event.url.includes(route))
        this.hideElementForCore= routesToHideCore.some(route=>event.url.includes(route))
        this.showElementForLogin= event.url.includes('/login')
        this.showElementForSignup= event.url.includes('/register')
      });

      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          // Define route-specific classes
          if (this.routesForInitial.some((route)=>event.url.includes(route))) {
            this.divClass = 'col-lg-7'; // Make it larger for route1
          } else if (this.routesForStudent.some((route)=>event.url.includes(route))) {
            this.divClass = 'col-lg-5'; // Make it smaller for route2
          } else {
            this.divClass = 'col-lg-4'; // Default size
          }
        }
      });

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
    this.subtitleText44ConfigProperties = {
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
      value: 'Exam',
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
    this.subtitleText55ConfigProperties = {
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
      value: 'Result',
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
    this.subtitleText66ConfigProperties = {
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
      value: 'Report',
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
    this.button13ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          ' border-radius-05rem border-width-1 font-size-11rem font-weight-600 color-000000 ',
      },
      isHidden: false,
      propertyName: '7733989b-f633-42bf-a8d9-ac5fa707f6e4',
      showLabel: false,
      type: 'button',
      formControlName: 'button12FormControl',
      btnText: 'Logout',
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
    this.router.navigate(['/login'])
  }
  button12submitForm() {
    this.router.navigate(['/register'])
  }
  button13submitForm() {
    localStorage.clear();
    sessionStorage.clear();
  }
}
