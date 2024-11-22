import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/Service/exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.scss'],
})
export class AddExamComponent implements OnInit {
  public titleH3Text31ConfigProperties: any;
  public text41ConfigProperties: any;
  public text41FormValidation: any;
  public textArea1ConfigProperties: any;
  public textArea1FormValidation: any;
  public datePicker1ConfigProperties: any;
  public datePicker1FormValidation: any;
  public datePicker12ConfigProperties: any;
  public datePicker12FormValidation: any;
  public number1ConfigProperties: any;
  public number1FormValidation: any;
  public number12ConfigProperties: any;
  public number12FormValidation: any;
  public number23ConfigProperties: any;
  public number23FormValidation: any;
  public number34ConfigProperties: any;
  public number34FormValidation: any;
  public checkBox1ConfigProperties: any;
  public checkBox1FormValidation: any;
  public checkBox12ConfigProperties: any;
  public checkBox12FormValidation: any;
  public button113ConfigProperties: any;

  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit() {
    this.titleH3Text31ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '541ff775-b8b4-451d-908a-072a93a9bf22',
      showLabel: false,
      type: 'title-h3-text',
      value: 'Add Exam',
      formControlName: 'titleH3Text31FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faH3',
      listChilds: [],
      styleType: '',
      variableName: 'titleH3Text31ConfigProperties',
      listOfOptions: [],
    };
    this.text41ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '5c45195f-e275-418f-a4c0-909165fd16d9',
      showLabel: true,
      displayName: 'Title:',
      type: 'text-input',
      placeHolder: 'Enter Exam Title',
      formControlName: 'text41FormControl',
      iterationKey: '',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputText',
      listChilds: [],
      styleType: '',
      variableName: 'text41ConfigProperties',
      listOfOptions: [],
    };
    this.text41FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.textArea1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-58 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '27d07940-253d-4e60-ac23-b7e1482e9493',
      showLabel: true,
      displayName: 'Description',
      type: 'text-area',
      placeHolder: 'Description for the Exam',
      formControlName: 'textArea1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faTextHeight',
      listChilds: [],
      styleType: '',
      variableName: 'textArea1ConfigProperties',
      listOfOptions: [],
    };
    this.textArea1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.datePicker1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        datePickerStyle: '',
      },
      isHidden: false,
      propertyName: 'c9aa57a8-3008-4989-ab94-363d07ef3a28',
      showLabel: true,
      displayName: 'Start Date',
      type: 'date-picker',
      value: '2024-11-21T17:51:04.551Z',
      placeHolder: 'Start Date',
      formControlName: 'datePicker1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faCalendar',
      listChilds: [],
      dateFormat: 'MM/DD/YYYY',
      styleType: '',
      variableName: 'datePicker1ConfigProperties',
      listOfOptions: [],
    };
    this.datePicker1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
      ],
    };
    this.datePicker12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        datePickerStyle: '',
      },
      isHidden: false,
      propertyName: 'd2f880a3-afa9-4eca-91aa-cc3685002f87',
      showLabel: true,
      displayName: 'End Date',
      type: 'date-picker',
      value: '2024-11-21T17:51:43.410Z',
      placeHolder: 'End Date',
      formControlName: 'datePicker12FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faCalendar',
      listChilds: [],
      dateFormat: 'MM/DD/YYYY',
      styleType: '',
      variableName: 'datePicker12ConfigProperties',
      listOfOptions: [],
    };
    this.datePicker12FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
      ],
    };
    this.number1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '7162f5b8-079a-4939-962c-df6bdd8783bc',
      showLabel: true,
      displayName: 'Duration (Please mentioned in minutes)',
      type: 'number-input',
      placeHolder: 'Duration',
      formControlName: 'number1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number1ConfigProperties',
      listOfOptions: [],
    };
    this.number1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: 'f56039ec-6bfd-46c6-ab87-1c2ec9c0023f',
      showLabel: true,
      displayName: 'Total Question',
      type: 'number-input',
      placeHolder: 'Total Question',
      formControlName: 'number12FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number12ConfigProperties',
      listOfOptions: [],
    };
    this.number12FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number23ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: '2d91301f-f9df-47dd-bb02-28c720d0c91b',
      showLabel: true,
      displayName: 'Total Marks',
      type: 'number-input',
      placeHolder: 'Total Marks',
      formControlName: 'number23FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number23ConfigProperties',
      listOfOptions: [],
    };
    this.number23FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.number34ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        inputStyle:
          'height-48 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 width-100-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
      },
      isHidden: false,
      propertyName: 'a80092e2-ae5d-4e11-9d11-3b78b6499ae9',
      showLabel: true,
      displayName: 'Passing Threshold',
      type: 'number-input',
      placeHolder: 'Passing Threshold',
      formControlName: 'number34FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faInputNumeric',
      listChilds: [],
      styleType: '',
      variableName: 'number34ConfigProperties',
      listOfOptions: [],
    };
    this.number34FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: true },
        { validationType: 'min', value: 0, required: false },
        { validationType: 'max', value: 100, required: false },
      ],
    };
    this.checkBox1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'background-color-rgb255-255-255-1',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        checkBoxStyle: '',
        checkboxLabelStyle: 'color-black background-color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: 'dc0fcbf7-e7db-4389-bf97-68200d426458',
      showLabel: false,
      type: 'check-box',
      value: '',
      formControlName: 'checkBox1FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      checkLabel: 'Published',
      childs: [],
      icon: 'faCheckSquare',
      listChilds: [],
      styleType: '',
      variableName: 'checkBox1ConfigProperties',
      listOfOptions: [],
    };
    this.checkBox1FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: false },
      ],
    };
    this.checkBox12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        checkBoxStyle: '',
        checkboxLabelStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '11db69bd-b87b-431e-814e-8f7bc0b40362',
      showLabel: false,
      type: 'check-box',
      value: '',
      formControlName: 'checkBox12FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      checkLabel: 'IsRandomized',
      childs: [],
      icon: 'faCheckSquare',
      listChilds: [],
      styleType: '',
      variableName: 'checkBox12ConfigProperties',
      listOfOptions: [],
    };
    this.checkBox12FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: false },
      ],
    };
    this.button113ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 background-color-rgb74-21-72-1 box-shadow-0-0-0000 font-size-16 font-weight-400 color-rgb255-255-255-1 padding-top-1-percent padding-bottom-1-percent padding-right-16 padding-left-16',
      },
      isHidden: false,
      propertyName: 'd12a02c2-49b4-4d5a-9add-345045a411b7',
      showLabel: false,
      type: 'button',
      formControlName: 'button113FormControl',
      btnText: 'Create Exam',
      btnType: 'submit',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button113ConfigProperties',
      listOfOptions: [],
    };
  }

  text41Changed(event: any) {
    this.text41ConfigProperties = event;
  }
  textArea1Changed(event: any) {
    this.textArea1ConfigProperties = event;
  }
  datePicker1Changed(event: any) {
    this.datePicker1ConfigProperties = event;
  }
  datePicker12Changed(event: any) {
    this.datePicker12ConfigProperties = event;
  }
  number1Changed(event: any) {
    this.number1ConfigProperties = event;
  }
  number12Changed(event: any) {
    this.number12ConfigProperties = event;
  }
  number23Changed(event: any) {
    this.number23ConfigProperties = event;
  }
  number34Changed(event: any) {
    this.number34ConfigProperties = event;
  }
  checkBox1Changed(event: any) {
    this.checkBox1ConfigProperties = event;
  }
  checkBox12Changed(event: any) {
    this.checkBox12ConfigProperties = event;
  }
  button113submitForm() {

    const payload = {
      title: this.text41ConfigProperties.value,
      description:this.textArea1ConfigProperties.value,
      startDate: this.datePicker1ConfigProperties.value,
      endDate: this.datePicker12ConfigProperties.value,
      duration:this.number1ConfigProperties.value,
      totalQuestions: this.number12ConfigProperties.value,
      totalMarks: this.number23ConfigProperties.value,
      passingMarks:this.number34ConfigProperties.value,
      isActive:  (this.checkBox1ConfigProperties.value == '')?false:this.checkBox1ConfigProperties.value,
      isRandomized:(this.checkBox12ConfigProperties.value == '')?false:this.checkBox12ConfigProperties.value,
      createdBy: localStorage.getItem('currentUserId'),
      createdOn: new Date().toISOString(),  
      updatedOn: new Date().toISOString()
    };

    this.examService.AddExam(payload).subscribe(
      (response) => {
        alert("Exam Added Successfully")
        console.log('Success:', response);
        window.location.reload();

      },
      (error) => {
        alert("Error while Registration")
        this.router.navigate(['/admin-exam']);
        window.location.reload();
      }
    );
  }
}
