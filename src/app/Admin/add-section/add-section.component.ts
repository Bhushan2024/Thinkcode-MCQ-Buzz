import { Component, OnInit, Input } from '@angular/core';
import { ExamService } from 'src/app/Service/exam.service';

@Component({
  selector: 'add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent implements OnInit {
  @Input() examId!: any;
  public titleH3Text41ConfigProperties: any;
  public text72ConfigProperties: any;
  public text72FormValidation: any;
  public number41ConfigProperties: any;
  public number41FormValidation: any;
  public number52ConfigProperties: any;
  public number52FormValidation: any;
  public number63ConfigProperties: any;
  public number63FormValidation: any;
  public number74ConfigProperties: any;
  public number74FormValidation: any;
  public button121ConfigProperties: any;

  constructor(private examService: ExamService) {}

  ngOnInit() {
    console.log('Received Exam IDDDDDD:', this.examId);
    this.titleH3Text41ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'e7826872-9851-401b-8430-bb7799ee8c88',
      showLabel: false,
      type: 'title-h3-text',
      value: 'Add Section',
      formControlName: 'titleH3Text41FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faH3',
      listChilds: [],
      styleType: '',
      variableName: 'titleH3Text41ConfigProperties',
      listOfOptions: [],
    };
    this.text72ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '6ee9e874-4d62-471c-9669-39d08d2e3611',
      showLabel: true,
      displayName: 'Section Title',
      type: 'text-input',
      placeHolder: 'Enter Section Title',
      formControlName: 'text72FormControl',
      iterationKey: '',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputText',
      listChilds: [],
      styleType: '',
      variableName: 'text72ConfigProperties',
      listOfOptions: [],
    };
    this.text72FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number41ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '0b6484dd-87fc-4025-9bed-02aa2755e19c',
      showLabel: true,
      displayName: 'Total Question',
      type: 'number-input',
      placeHolder: 'Enter total Question',
      formControlName: 'number41FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number41ConfigProperties',
      listOfOptions: [],
    };
    this.number41FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number52ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '5ed4ed2e-beab-44bc-ba72-3ceec6402061',
      showLabel: true,
      displayName: 'Total Marks',
      type: 'number-input',
      placeHolder: 'Enter Total Marks',
      formControlName: 'number52FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number52ConfigProperties',
      listOfOptions: [],
    };
    this.number52FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number63ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: 'fb0c9a4d-9a73-4e3e-80fb-6fef65b985fc',
      showLabel: true,
      displayName: 'Passing Marks',
      type: 'number-input',
      placeHolder: 'Enter Passing Marks',
      formControlName: 'number63FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number63ConfigProperties',
      listOfOptions: [],
    };
    this.number63FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number74ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '0d4f9cb6-e3e4-48fe-aa64-ddf490451acc',
      showLabel: true,
      displayName: 'Weightage (Should be in percentage only)',
      type: 'number-input',
      placeHolder: '0- 100',
      formControlName: 'number74FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number74ConfigProperties',
      listOfOptions: [],
    };
    this.number74FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: true },
        { validationType: 'max', value: 100, required: true },
      ],
    };
    this.button121ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 padding-top-6 padding-bottom-6 font-size-16 font-weight-400 color-rgb255-255-255-1 background-color-rgb74-21-72-1 margin-top-15',
      },
      isHidden: false,
      propertyName: '9558ab71-3dcf-4434-b989-8c340e5292e3',
      showLabel: false,
      type: 'button',
      formControlName: 'button121FormControl',
      btnText: 'Add Section',
      btnType: 'submit',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button121ConfigProperties',
      listOfOptions: [],
    };
  }

  text72Changed(event: any) {
    this.text72ConfigProperties = event;
  }
  number41Changed(event: any) {
    this.number41ConfigProperties = event;
  }
  number52Changed(event: any) {
    this.number52ConfigProperties = event;
  }
  number63Changed(event: any) {
    this.number63ConfigProperties = event;
  }
  number74Changed(event: any) {
    this.number74ConfigProperties = event;
  }
  button121submitForm() {
    const payload = {
      examId:this.examId,
      title: this.text72ConfigProperties.value,
      totalQuestions:this.number41ConfigProperties.value,
      totalMarks: this.number52ConfigProperties.value,
      passingMarks: this.number63ConfigProperties.value,
      weightagePercentage:this.number74ConfigProperties.value,
      createdBy: localStorage.getItem('currentUserId'),
      createdOn: new Date().toISOString(),  
      updatedOn: new Date().toISOString()
    };
    this.examService.AddSection(payload).subscribe(
      (response) => {
        alert("Section Added Successfully")
        console.log('Success:', response);
        window.location.reload();

      },
      (error) => {
        alert("Error while Adding Section")
        window.location.reload();
      }
    );
  }
}
