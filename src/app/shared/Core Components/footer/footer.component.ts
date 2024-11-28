import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public copyrightText1ConfigProperties: any;

  constructor() {}

  ngOnInit() {
    this.copyrightText1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle:
          'background-color-rgb74-21-72-1 text-align-center height-4rem width-100-percent position-fixed bottom-0 align-content-center',
        supportingTextStyle: 'color-6c757d',
        copyrightTextStyle: 'color-rgb255-255-255-1 font-size-1rem font-weight-600',
      },
      isHidden: false,
      propertyName: 'eb82ddb6-9899-44ec-a31b-fc37fffdbcf0',
      showLabel: false,
      type: 'copyright-text',
      formControlName: 'copyrightText1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faCopyright',
      listChilds: [],
      styleType: '',
      variableName: 'copyrightText1ConfigProperties',
      listOfOptions: [],
      copyrightYear: '',
      copyrightLink: '',
      copyrightName: '',
    };
  }
}
