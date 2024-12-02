import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forEach } from 'lodash';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ExamService } from 'src/app/Service/exam.service';
import { UserAnswerService } from 'src/app/Service/user-answer.service';

@Component({
  selector: 'exam-question',
  templateUrl: './exam-question.component.html',
  styleUrls: ['./exam-question.component.scss']
})
export class ExamQuestionComponent implements OnInit {
  public subtitleText101ConfigProperties: any;
  public subtitleText123ConfigProperties: any;
  public subtitleText112ConfigProperties: any;
  public subtitleText134ConfigProperties: any;
  public subtitleText145ConfigProperties: any;
  public subtitleText167ConfigProperties: any;
  public radioButtons12ConfigProperties: any;
  public radioButtons12FormValidation: any;
  public radioButtons13ConfigProperties: any;
  public radioButtons13FormValidation: any;
  public radioButtons14ConfigProperties: any;
  public radioButtons14FormValidation: any;
  public radioButtons15ConfigProperties: any;
  public radioButtons15FormValidation: any;
  public checkBox1ConfigProperties: any;
  public checkBox1FormValidation: any;
  public button77ConfigProperties: any;
  public button88ConfigProperties: any;
  public button99ConfigProperties: any;
  public card11ConfigProperties: any;
  public subtitleText193ConfigProperties: any;
  public subtitleText204ConfigProperties: any;
  public subtitleText226ConfigProperties: any;
  public button55ConfigProperties: any;
  public popup9ConfigProperties: any;
  @ViewChild('popup9Template') popup9Template!: TemplateRef<any>;
  popup9BsModalRef!: BsModalRef;
  public button122ConfigProperties: any;
  public examId: any;
  public exam : any;
  public cardsConfigProperties: any;
  currentSectionIndex: number = 0; // Track current section
  currentQuestionIndex: number = 0; // Track current question in the section
  currentOptions:any[]=[]
  public selectedOption:number=0;
  public examQuestions:any[]=[];
  public questions :any[]=[]
  constructor(public modalService: BsModalService, private router: Router,private route: ActivatedRoute, private examService: ExamService, private userAnswerService: UserAnswerService) {}
  public examSections: any[]=[]
  public sectionQuestions:any[]=[]
  public sectionConfigs:any[]=[]
  public questionConfigs :any[]=[]
  public selectedOptions:any[]=[];
  remainingTime : number=0;
  timer: any;
  minutes: number = 0;
  seconds: number = 0;
  examDuration: number = 0; // To be fetched from the backend
  private interval: any;
  isLoading: boolean = true; 

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['examId']) {
        console.log('Query params data:', params['examId']);
        this.examId = params['examId'];
        this.getExamByExamId()
      } else {
        console.error('No query params found!');
      }
    });
    this.subtitleText101ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: 'd75e161b-ab0c-4ed4-8f30-bbe2f1f58738',
      showLabel: false,
      type: 'subtitle-text',
      value: 'viraj@gmail.com',
      formControlName: 'subtitleText101FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText101ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText123ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'text-align-center',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: '08cfbeeb-326a-466a-887f-414ef6885301',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Angular',
      formControlName: 'subtitleText123FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText123ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText112ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'text-align-right',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: '5256fb98-1860-487c-87dc-4a04f6b802fa',
      showLabel: false,
      type: 'subtitle-text',
      value: '30:00  Remaining',
      formControlName: 'subtitleText112FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText112ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText134ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: '7309b661-cd1c-42c0-8b19-6d168adbfaa6',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Question-1',
      formControlName: 'subtitleText134FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText134ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText145ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-1rem',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '4dcd1884-0dee-4971-8634-9ce7acadbc87',
      showLabel: false,
      type: 'subtitle-text',
      value: 'What is Angular ?',
      formControlName: 'subtitleText145FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText145ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText167ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-05rem',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-rgb130-130-130-1',
      },
      isHidden: false,
      propertyName: 'c7c5cd74-a92b-43fa-b01d-5fbcd48d20ce',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Choose one',
      formControlName: 'subtitleText167FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText167ConfigProperties',
      listOfOptions: [],
    };
    this.radioButtons12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        radioButtonStyle: '',
        radioButtonLabelStyle: 'color-black margin-bottom-0',
      },
      isHidden: false,
      propertyName: '2d4de559-3f59-4c50-84bc-85b38b0bfd7a',
      showLabel: false,
      type: 'radio-buttons',
      formControlName: 'radioButtons12FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faDotCircle',
      listChilds: [],
      styleType: '',
      variableName: 'radioButtons12ConfigProperties',
      listOfOptions: [{ displayName: 'Frontend Framework', value: 'Frontend Framework' }],
    };
    this.radioButtons12FormValidation = {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: false },
      ],
    };
    this.checkBox1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-1-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        checkBoxStyle: '',
        checkboxLabelStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '6b952160-b552-4a0a-996b-b50ebdb976fe',
      showLabel: false,
      type: 'check-box',
      value: '',
      formControlName: 'checkBox1FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      checkLabel: 'Frontend Library',
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
    this.button77ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: '0de88466-6c38-4f9c-a301-0bfb7221d80d',
      showLabel: false,
      type: 'button',
      formControlName: 'button77FormControl',
      btnText: 'Previous Question',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button77ConfigProperties',
      listOfOptions: [],
    };
    this.button88ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'text-align-right',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: '7ab44005-a3c0-422d-bba1-7b5925796eb7',
      showLabel: false,
      type: 'button',
      formControlName: 'button88FormControl',
      btnText: 'Next Question',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button88ConfigProperties',
      listOfOptions: [],
    };
    this.button99ConfigProperties={
      helpText: '',
      styles: {
        componentStyle: 'text-align-right',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 background-color-rgb74-21-72-4 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: 'button99',
      showLabel: false,
      type: 'button',
      formControlName: 'button99FormControl',
      btnText: 'Submit',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button99ConfigProperties',
      listOfOptions: [],
    };
    this.card11ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        cardComponentStyle: 'height-50 margin-top-5rem',
        cardBodyStyle:
          'box-shadow-0-20-25--5-rgb0-0-0--01-0-8-10--6-rgb0-0-0--01 border-width-1 border-style-dotted border-color-000000 border-radius-4 p-1',
      },
      isHidden: false,
      propertyName: '827601a4-cbea-483c-b04a-69babec86704',
      showLabel: false,
      type: 'card',
      formControlName: 'card11FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [
        {
          componentId: 16,
          componentName: 'Subtitle Text 13 4',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faText',
          componentType: 'Text',
          showLabel: false,
          propertyName: '7309b661-cd1c-42c0-8b19-6d168adbfaa6',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'subtitle-text',
          sortOrder: 1020101010,
          value: 'Question-1',
          isActive: false,
          customCssClasses: [],
          note: '',
          isHidden: false,
          isImplemented: true,
          styles: {},
          labelStyles: {},
          helpText: '',
          navigateTo: '',
          listOfOptions: [],
          customStyles: [
            {
              styleId: 1,
              styleType: 'component-styles',
              styleObj: {},
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 4,
              styleType: 'supporting-text-styles',
              styleObj: { color: '#6c757d' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 16,
              styleType: 'subtitle-text-styles',
              styleObj: { color: 'black', fontWeight: '600' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: [
            'component-styles',
            'subtitle-text-styles',
            'supporting-text-styles',
          ],
          allowApiConfiguration: false,
          formControlName: '',
          templatePropertyId: 1,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          defaultState: '',
          index: 0,
        },
        {
          componentId: 16,
          componentName: 'Subtitle Text 14 5',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faText',
          componentType: 'Text',
          showLabel: false,
          propertyName: '4dcd1884-0dee-4971-8634-9ce7acadbc87',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'subtitle-text',
          sortOrder: 1020101020,
          value: 'What is Angular ?',
          isActive: false,
          customCssClasses: [],
          note: '',
          isHidden: false,
          isImplemented: true,
          styles: {},
          labelStyles: {},
          helpText: '',
          navigateTo: '',
          listOfOptions: [],
          customStyles: [
            {
              styleId: 1,
              styleType: 'component-styles',
              styleObj: { marginTop: '1rem' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 4,
              styleType: 'supporting-text-styles',
              styleObj: { color: '#6c757d' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 16,
              styleType: 'subtitle-text-styles',
              styleObj: { color: 'black' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: [
            'component-styles',
            'subtitle-text-styles',
            'supporting-text-styles',
          ],
          allowApiConfiguration: false,
          formControlName: '',
          templatePropertyId: 2,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          defaultState: '',
          index: 1,
        },
        {
          componentId: 16,
          componentName: 'Subtitle Text 16 7',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faText',
          componentType: 'Text',
          showLabel: false,
          propertyName: 'c7c5cd74-a92b-43fa-b01d-5fbcd48d20ce',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'subtitle-text',
          sortOrder: 1020101030,
          value: 'Choose one',
          isActive: false,
          customCssClasses: [],
          note: '',
          isHidden: false,
          isImplemented: true,
          styles: {},
          labelStyles: {},
          helpText: '',
          navigateTo: '',
          listOfOptions: [],
          customStyles: [
            {
              styleId: 1,
              styleType: 'component-styles',
              styleObj: { marginTop: '0.5rem' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 4,
              styleType: 'supporting-text-styles',
              styleObj: { color: '#6c757d' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 16,
              styleType: 'subtitle-text-styles',
              styleObj: { color: 'rgb(130, 130, 130, 1)' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: [
            'component-styles',
            'subtitle-text-styles',
            'supporting-text-styles',
          ],
          allowApiConfiguration: false,
          formControlName: '',
          templatePropertyId: 3,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          defaultState: '',
          index: 2,
        },
        {
          componentId: 7,
          componentName: 'Radio Buttons 1 2',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faDotCircle',
          componentType: 'Basic Input Fields',
          showLabel: false,
          validations: [
            { validationType: 'readonly', required: false },
            { validationType: 'mandatory', required: false },
          ],
          propertyName: '2d4de559-3f59-4c50-84bc-85b38b0bfd7a',
          newProperty: true,
          hasChildEntity: true,
          hasPlaceholder: false,
          type: 'radio-buttons',
          sortOrder: 1020101040,
          value: null,
          staticFn: [],
          customCssClasses: [],
          note: '',
          isHidden: false,
          isImplemented: true,
          styles: {},
          labelStyles: {},
          helpText: '',
          navigateTo: '',
          listOfOptions: [{ displayName: 'Frontend Framework', value: 'Frontend Framework' }],
          customStyles: [
            {
              styleId: 1,
              styleType: 'component-styles',
              styleObj: {},
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 3,
              styleType: 'label-styles',
              styleObj: {
                textAlign: 'left',
                fontSize: '16px',
                fontWeight: '500',
                color: '#000000',
              },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 4,
              styleType: 'supporting-text-styles',
              styleObj: { color: '#6c757d' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 14,
              styleType: 'radio-button-styles',
              styleObj: {},
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 15,
              styleType: 'radio-button-label-styles',
              styleObj: { color: 'black', marginBottom: '0' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: [
            'component-styles',
            'label-styles',
            'supporting-text-styles',
            'radio-button-styles',
            'radio-button-label-styles',
          ],
          allowApiConfiguration: true,
          formControlName: '',
          templatePropertyId: 4,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          defaultState: '',
          index: 3,
          isActive: false,
        },
        {
          componentId: 6,
          componentName: 'Check Box 1',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faCheckSquare',
          componentType: 'Basic Input Fields',
          showLabel: false,
          validations: [
            { validationType: 'readonly', required: false },
            { validationType: 'mandatory', required: false },
          ],
          propertyName: '6b952160-b552-4a0a-996b-b50ebdb976fe',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'check-box',
          sortOrder: 1020101050,
          value: '',
          isActive: false,
          staticFn: [],
          customCssClasses: [],
          note: '',
          isHidden: false,
          isImplemented: true,
          styles: {},
          labelStyles: {},
          helpText: '',
          navigateTo: '',
          listOfOptions: [],
          customStyles: [
            {
              styleId: 1,
              styleType: 'component-styles',
              styleObj: { marginTop: '1%' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 3,
              styleType: 'label-styles',
              styleObj: {
                textAlign: 'left',
                fontSize: '16px',
                fontWeight: '500',
                color: '#000000',
              },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 4,
              styleType: 'supporting-text-styles',
              styleObj: { color: '#6c757d' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 12,
              styleType: 'checkbox-styles',
              styleObj: {},
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 13,
              styleType: 'checkbox-label-styles',
              styleObj: { color: 'black' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: [
            'component-styles',
            'checkbox-styles',
            'label-styles',
            'supporting-text-styles',
            'checkbox-label-styles',
          ],
          allowApiConfiguration: true,
          checkLabel: 'Frontend Library',
          formControlName: '',
          templatePropertyId: 5,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          defaultState: '',
          index: 4,
        },
        {
          componentId: 28,
          displayName: 'Grid',
          componentName: 'Grid 13 2',
          childs: [],
          icon: 'faGrid',
          componentType: 'layouts',
          showLabel: false,
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'grid',
          sortOrder: 1020101060,
          gridColsChild: [
            {
              displayName: 'Column-0',
              componentId: 280,
              componentKey: 'grid',
              type: 'grid_col',
              propertyType: 'string',
              componentType: 'layouts',
              controlType: 'string',
              propertyName: '388cd972-75b4-4eed-b9bd-af91598b3706_G_Col_0',
              hasChildEntity: true,
              hasPlaceholder: false,
              hasDefaultValue: false,
              sortOrder: 102010106010,
              showLabel: true,
              validations: [],
              validationsList: [],
              childs: [
                {
                  componentId: 9,
                  componentName: 'Button 7 7',
                  listChilds: [],
                  styleType: '',
                  mobileFloatAlignment: '',
                  childs: [],
                  icon: 'faRectangleLandscape',
                  componentType: 'Basic Input Fields',
                  showLabel: false,
                  propertyName: '0de88466-6c38-4f9c-a301-0bfb7221d80d',
                  newProperty: true,
                  hasChildEntity: false,
                  hasPlaceholder: false,
                  type: 'button',
                  sortOrder: 10201010601010,
                  btnClass: 'btn-primary',
                  btnText: 'Previous Question',
                  value: null,
                  isActive: false,
                  btnType: 'button',
                  dynamicFn: [],
                  staticFn: [],
                  customCssClasses: [],
                  note: '',
                  isHidden: false,
                  isImplemented: true,
                  styles: {},
                  labelStyles: {},
                  helpText: '',
                  navigateTo: '',
                  listOfOptions: [],
                  customStyles: [
                    {
                      styleId: 1,
                      styleType: 'component-styles',
                      styleObj: {},
                      customCssClasses: [],
                      flexAlignmentClasses: [],
                    },
                    {
                      styleId: 4,
                      styleType: 'supporting-text-styles',
                      styleObj: { color: '#6c757d' },
                      customCssClasses: [],
                      flexAlignmentClasses: [],
                    },
                    {
                      styleId: 17,
                      styleType: 'button-styles',
                      styleObj: {
                        borderRadius: '4px',
                        borderWidth: '1px',
                        bgColor: 'rgb(74, 21, 72, 1)',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'rgb(255, 255, 255, 1)',
                      },
                      customCssClasses: [],
                      flexAlignmentClasses: [],
                    },
                  ],
                  customStyleTypeOptions: [
                    'component-styles',
                    'supporting-text-styles',
                    'button-styles',
                  ],
                  allowApiConfiguration: true,
                  formControlName: '',
                  templatePropertyId: 1,
                  isDataStoredInSession: false,
                  fieldStorageKeyValue: '',
                  mapValuesFromProperty: '',
                  defaultState: '',
                  index: 0,
                },
              ],
              colSize: 'col-lg-3',
              isActive: false,
              styles: {},
              customStyles: [
                {
                  title: 'Grid Column Styles',
                  value: 'grid-col-styles',
                  styleId: 6,
                  styleObj: { color: 'black' },
                  customCssClasses: [],
                  flexAlignmentClasses: [],
                  supportedStyleIds: [1, 3, 4, 5, 6, 8, 10, 11],
                },
              ],
              customStyleTypeOptions: ['grid-col-styles'],
              templatePropertyId: 102010106010,
              index: 0,
            },
            {
              displayName: 'Column-1',
              componentId: 281,
              componentKey: 'grid',
              type: 'grid_col',
              propertyType: 'string',
              componentType: 'layouts',
              controlType: 'string',
              propertyName: '388cd972-75b4-4eed-b9bd-af91598b3706_G_Col_1',
              hasChildEntity: true,
              hasPlaceholder: false,
              hasDefaultValue: false,
              sortOrder: 102010106020,
              showLabel: true,
              validations: [],
              validationsList: [],
              childs: [],
              colSize: 'col-lg-5',
              isActive: false,
              styles: {},
              customStyles: [
                {
                  title: 'Grid Column Styles',
                  value: 'grid-col-styles',
                  styleId: 6,
                  styleObj: { color: 'black' },
                  customCssClasses: [],
                  flexAlignmentClasses: [],
                  supportedStyleIds: [1, 3, 4, 5, 6, 8, 10, 11],
                },
              ],
              customStyleTypeOptions: ['grid-col-styles'],
              templatePropertyId: 102010106020,
              index: 1,
            },
            {
              displayName: 'Column-2',
              componentId: 282,
              componentKey: 'grid',
              type: 'grid_col',
              propertyType: 'string',
              componentType: 'layouts',
              controlType: 'string',
              propertyName: '388cd972-75b4-4eed-b9bd-af91598b3706_G_Col_2',
              hasChildEntity: true,
              hasPlaceholder: false,
              hasDefaultValue: false,
              sortOrder: 102010106030,
              showLabel: false,
              validations: [],
              validationsList: [],
              childs: [
                {
                  componentId: 9,
                  componentName: 'Button 8 8',
                  listChilds: [],
                  styleType: '',
                  mobileFloatAlignment: '',
                  childs: [],
                  icon: 'faRectangleLandscape',
                  componentType: 'Basic Input Fields',
                  showLabel: false,
                  propertyName: '7ab44005-a3c0-422d-bba1-7b5925796eb7',
                  newProperty: true,
                  hasChildEntity: false,
                  hasPlaceholder: false,
                  type: 'button',
                  sortOrder: 10201010603010,
                  btnClass: 'btn-primary',
                  btnText: 'Next Question',
                  value: null,
                  isActive: false,
                  btnType: 'button',
                  dynamicFn: [],
                  staticFn: [],
                  customCssClasses: [],
                  note: '',
                  isHidden: false,
                  isImplemented: true,
                  styles: {},
                  labelStyles: {},
                  helpText: '',
                  navigateTo: '',
                  listOfOptions: [],
                  customStyles: [
                    {
                      styleId: 1,
                      styleType: 'component-styles',
                      styleObj: { textAlign: 'right' },
                      customCssClasses: [],
                      flexAlignmentClasses: [],
                    },
                    {
                      styleId: 4,
                      styleType: 'supporting-text-styles',
                      styleObj: { color: '#6c757d' },
                      customCssClasses: [],
                      flexAlignmentClasses: [],
                    },
                    {
                      styleId: 17,
                      styleType: 'button-styles',
                      styleObj: {
                        borderRadius: '4px',
                        borderWidth: '1px',
                        bgColor: 'rgb(74, 21, 72, 1)',
                        fontSize: '16px',
                        fontWeight: '400',
                        color: 'rgb(255, 255, 255, 1)',
                      },
                      customCssClasses: [],
                      flexAlignmentClasses: [],
                    },
                  ],
                  customStyleTypeOptions: [
                    'component-styles',
                    'supporting-text-styles',
                    'button-styles',
                  ],
                  allowApiConfiguration: true,
                  formControlName: '',
                  templatePropertyId: 1,
                  isDataStoredInSession: false,
                  fieldStorageKeyValue: '',
                  mapValuesFromProperty: '',
                  defaultState: '',
                  index: 0,
                },
              ],
              colSize: 'col-lg-4',
              isActive: false,
              styles: {},
              customStyles: [
                {
                  title: 'Grid Column Styles',
                  value: 'grid-col-styles',
                  styleId: 6,
                  styleObj: { color: 'black' },
                  customCssClasses: [],
                  flexAlignmentClasses: [],
                  supportedStyleIds: [1, 3, 4, 5, 6, 8, 10, 11],
                },
              ],
              customStyleTypeOptions: ['grid-col-styles'],
              componentName: 'Column-2',
              customCssClasses: [],
              defaultState: '',
              templatePropertyId: 102010106030,
              index: 2,
            },
          ],
          isActive: false,
          dynamicFn: [],
          isElementLooped: false,
          iterationKey: '',
          note: '',
          styles: {},
          customStyles: [
            {
              styleId: 5,
              styleType: 'grid-styles',
              styleObj: { marginTop: '2%' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: ['grid-styles'],
          allowApiConfiguration: false,
          propertyName: '388cd972-75b4-4eed-b9bd-af91598b3706',
          templatePropertyId: 6,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          isHidden: false,
          customCssClasses: [],
          defaultState: '',
          index: 5,
        },
      ],
      icon: 'faIdCard',
      listChilds: [],
      styleType: '',
      variableName: 'card11ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText193ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600 font-size-12rem',
      },
      isHidden: false,
      propertyName: '8a094b6f-ac4d-4e19-88f7-5b9510af90ad',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Sections',
      formControlName: 'subtitleText193FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText193ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText204ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle:
          'border-width-1 border-style-solid border-color-000000 border-radius-4 background-color-rgb246-175-115-1',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'd1f27284-4eba-4645-ac21-8750b7e19b7d',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Section 1: Middleware',
      formControlName: 'subtitleText204FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText204ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText226ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-1rem',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '1dba0ea0-d649-48c1-b261-3bce94033821',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Questions in Middleware',
      formControlName: 'subtitleText226FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText226ConfigProperties',
      listOfOptions: [],
    };
    this.button55ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle: 'border-radius-100-percent border-width-1 border-style-solid',
      },
      isHidden: false,
      propertyName: '53dad6db-eb2a-486f-b0fe-836a74f51571',
      showLabel: false,
      type: 'button',
      formControlName: 'button55FormControl',
      btnText: 'Q1',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button55ConfigProperties',
      listOfOptions: [],
    };
    this.popup9ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black',
        iconStyle: 'color-black',
        popupStyle:
          'background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 color-000000 position-relative',
        popupHeaderStyle: '',
        popupBodyStyle: '',
      },
      isHidden: false,
      propertyName: '316bb427-66e5-43a5-8749-4cb1b7fc82c4',
      showLabel: false,
      type: 'popup',
      value: 'default',
      formControlName: 'popup9FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [
        {
          componentId: 9,
          componentName: 'Button 12 2',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faRectangleLandscape',
          componentType: 'Basic Input Fields',
          showLabel: false,
          propertyName: '78927d93-315c-4aef-9781-04a5107035a6',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'button',
          sortOrder: 110,
          btnClass: 'btn-primary',
          btnText: 'Save',
          value: null,
          btnType: 'submit',
          dynamicFn: [],
          staticFn: [],
          customCssClasses: [],
          note: '',
          isHidden: false,
          isImplemented: true,
          styles: {},
          labelStyles: {},
          helpText: '',
          navigateTo: '',
          listOfOptions: [],
          customStyles: [
            {
              styleId: 1,
              styleType: 'component-styles',
              styleObj: { textAlign: 'center' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 4,
              styleType: 'supporting-text-styles',
              styleObj: { color: '#6c757d' },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
            {
              styleId: 17,
              styleType: 'button-styles',
              styleObj: {
                borderRadius: '4px',
                borderWidth: '1px',
                height: '2rem',
                fontSize: '1.2rem',
                fontWeight: '400',
                color: 'rgb(255, 255, 255, 1)',
                bgColor: 'rgb(74, 21, 72, 1)',
              },
              customCssClasses: [],
              flexAlignmentClasses: [],
            },
          ],
          customStyleTypeOptions: ['component-styles', 'supporting-text-styles', 'button-styles'],
          allowApiConfiguration: true,
          formControlName: '',
          templatePropertyId: 1,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          defaultState: '',
          index: 0,
          isActive: false,
        },
      ],
      icon: 'faClone',
      listChilds: [],
      styleType: '',
      variableName: 'popup9ConfigProperties',
      listOfOptions: [],
      modalTitle: 'Do you want to save the changes and submit the exam ?',
    };
    this.button122ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'text-align-center',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 height-2rem font-size-12rem font-weight-400 color-rgb255-255-255-1 background-color-rgb74-21-72-1',
      },
      isHidden: false,
      propertyName: '78927d93-315c-4aef-9781-04a5107035a6',
      showLabel: false,
      type: 'button',
      formControlName: 'button122FormControl',
      btnText: 'Save',
      btnType: 'submit',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button122ConfigProperties',
      listOfOptions: [],
    };
  }

  private updateConfigProperties(){
    console.log(this.exam)
    console.log(this.currentQuestionIndex)
    console.log(this.currentSectionIndex)
    // this.examQuestions = this.exam.examSections[0].questions.map((question: any, index:any) => ({
    //   button55ConfigProperties: {
    //     helpText: '',
    //     styles: {
    //       componentStyle: '',
    //       supportingTextStyle: 'color-6c757d',
    //       buttonStyle: 'border-radius-100-percent border-width-1 border-style-solid',
    //     },
    //     isHidden: false,
    //     propertyName: '53dad6db-eb2a-486f-b0fe-836a74f51571',
    //     showLabel: false,
    //     type: 'button',
    //     formControlName: 'button55FormControl',
    //     btnText: 'Q' + (index + 1), // Dynamically set button text like "Q1", "Q2", ...
    //     btnType: 'button',
    //     navigateTo: '',
    //     staticFn: [],
    //     customCssClasses: [],
    //     childs: [],
    //     icon: 'faRectangleLandscape',
    //     listChilds: [],
    //     styleType: '',
    //     variableName: 'button55ConfigProperties',
    //     listOfOptions: [],
    //   },
    // }));

    // this.examSections = this.exam.sectionExams;
    // this.sectionConfigs = this.examSections.map((section)=>({
    //   subtitleText204ConfigProperties : {
    //     helpText: '',
    //     styles: {
    //       componentStyle:
    //         'border-width-1 border-style-solid border-color-000000 border-radius-4 background-color-rgb246-175-115-1',
    //       supportingTextStyle: 'color-6c757d',
    //       subtitleTextStyle: 'color-black',
    //     },
    //     isHidden: false,
    //     propertyName: 'd1f27284-4eba-4645-ac21-8750b7e19b7d',
    //     showLabel: false,
    //     type: 'subtitle-text',
    //     value: 'Section '+ this.currentSectionIndex+1+': '+ section.title,
    //     formControlName: 'subtitleText204FormControl',
    //     navigateTo: '',
    //     customCssClasses: [],
    //     childs: [],
    //     icon: 'faText',
    //     listChilds: [],
    //     styleType: '',
    //     variableName: 'subtitleText204ConfigProperties',
    //     listOfOptions: [],
    //   },
    //   subtitleText226ConfigProperties : {
    //     helpText: '',
    //     styles: {
    //       componentStyle: 'margin-top-1rem',
    //       supportingTextStyle: 'color-6c757d',
    //       subtitleTextStyle: 'color-black',
    //     },
    //     isHidden: false,
    //     propertyName: '1dba0ea0-d649-48c1-b261-3bce94033821',
    //     showLabel: false,
    //     type: 'subtitle-text',
    //     value: 'Questions in '+section.title,
    //     formControlName: 'subtitleText226FormControl',
    //     navigateTo: '',
    //     customCssClasses: [],
    //     childs: [],
    //     icon: 'faText',
    //     listChilds: [],
    //     styleType: '',
    //     variableName: 'subtitleText226ConfigProperties',
    //     listOfOptions: [],
    //   } 
    // }))

   this.cardsConfigProperties = {
    subtitleText101ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: 'd75e161b-ab0c-4ed4-8f30-bbe2f1f58738',
      showLabel: false,
      type: 'subtitle-text',
      value: sessionStorage.getItem('email'),
      formControlName: 'subtitleText101FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText101ConfigProperties',
      listOfOptions: [],
    },
    subtitleText123ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: 'text-align-center',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: '08cfbeeb-326a-466a-887f-414ef6885301',
      showLabel: false,
      type: 'subtitle-text',
      value:this.exam.title,
      formControlName: 'subtitleText123FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText123ConfigProperties',
      listOfOptions: [],
    },
    subtitleText112ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: 'text-align-right',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: '5256fb98-1860-487c-87dc-4a04f6b802fa',
      showLabel: false,
      type: 'subtitle-text',
      value: this.exam.duration+' mins remaining',
      formControlName: 'subtitleText112FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText112ConfigProperties',
      listOfOptions: [],
    },
   subtitleText134ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600',
      },
      isHidden: false,
      propertyName: '7309b661-cd1c-42c0-8b19-6d168adbfaa6',
      showLabel: false,
      type: 'subtitle-text',
      value:'Question-'+ this.currentQuestionIndex+1,
      formControlName: 'subtitleText134FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText134ConfigProperties',
      listOfOptions: [],
    },
   subtitleText145ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-1rem',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '4dcd1884-0dee-4971-8634-9ce7acadbc87',
      showLabel: false,
      type: 'subtitle-text',
      value: this.exam.sectionExams[this.currentSectionIndex].questions[this.currentQuestionIndex].questionText,
      formControlName: 'subtitleText145FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText145ConfigProperties',
      listOfOptions: [],
    },
    subtitleText167ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-05rem',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-rgb130-130-130-1',
      },
      isHidden: false,
      propertyName: 'c7c5cd74-a92b-43fa-b01d-5fbcd48d20ce',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Choose one',
      formControlName: 'subtitleText167FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText167ConfigProperties',
      listOfOptions: [],
    },
    radioButtons12ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        radioButtonStyle: '',
        radioButtonLabelStyle: 'color-black margin-bottom-0',
      },
      isHidden: false,
      propertyName: '2d4de559-3f59-4c50-84bc-85b38b0bfd7a',
      showLabel: false,
      type: 'radio-buttons',
      formControlName: 'radioButtons12FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faDotCircle',
      listChilds: [],
      styleType: '',
      variableName: 'radioButtons12ConfigProperties',
      listOfOptions: [{ displayName: 'Frontend Framework', value: 'Frontend Framework' }],
    },
    radioButtons13ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        radioButtonStyle: '',
        radioButtonLabelStyle: 'color-black margin-bottom-0',
      },
      isHidden: false,
      propertyName: '2d4de559-3f59-4c50-84bc-85b38b0bfd7a',
      showLabel: false,
      type: 'radio-buttons',
      formControlName: 'radioButtons13FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faDotCircle',
      listChilds: [],
      styleType: '',
      variableName: 'radioButtons13ConfigProperties',
      listOfOptions: [{ displayName: 'Frontend Framework', value: 'Frontend Framework' }],
    },
    radioButtons14ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        radioButtonStyle: '',
        radioButtonLabelStyle: 'color-black margin-bottom-0',
      },
      isHidden: false,
      propertyName: '2d4de559-3f59-4c50-84bc-85b38b0bfd7a',
      showLabel: false,
      type: 'radio-buttons',
      formControlName: 'radioButtons14FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faDotCircle',
      listChilds: [],
      styleType: '',
      variableName: 'radioButtons14ConfigProperties',
      listOfOptions: [{ displayName: 'Frontend Framework', value: 'Frontend Framework' }],
    },
    radioButtons15ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        radioButtonStyle: '',
        radioButtonLabelStyle: 'color-black margin-bottom-0',
      },
      isHidden: false,
      propertyName: '2d4de559-3f59-4c50-84bc-85b38b0bfd7a',
      showLabel: false,
      type: 'radio-buttons',
      formControlName: 'radioButtons15FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faDotCircle',
      listChilds: [],
      styleType: '',
      variableName: 'radioButtons15ConfigProperties',
      listOfOptions: [{ displayName: 'Frontend Framework', value: 'Frontend Framework' }],
    },
    radioButtons12FormValidation : {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: false },
      ],
    },
    checkBox1ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: 'margin-top-1-percent',
        labelStyle: 'text-align-left font-size-16 font-weight-500 color-000000',
        supportingTextStyle: 'color-6c757d',
        checkBoxStyle: '',
        checkboxLabelStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '6b952160-b552-4a0a-996b-b50ebdb976fe',
      showLabel: false,
      type: 'check-box',
      value: '',
      formControlName: 'checkBox1FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      checkLabel: 'Frontend Library',
      childs: [],
      icon: 'faCheckSquare',
      listChilds: [],
      styleType: '',
      variableName: 'checkBox1ConfigProperties',
      listOfOptions: [],
    },
    checkBox1FormValidation : {
      validations: [
        { validationType: 'readonly', required: false },
        { validationType: 'mandatory', required: false },
      ],
    },
    button77ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: '0de88466-6c38-4f9c-a301-0bfb7221d80d',
      showLabel: false,
      type: 'button',
      formControlName: 'button77FormControl',
      btnText: 'Previous Question',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button77ConfigProperties',
      listOfOptions: [],
    },
    button88ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: 'text-align-right',
        supportingTextStyle: 'color-6c757d',
        buttonStyle:
          'border-radius-4 border-width-1 background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: '7ab44005-a3c0-422d-bba1-7b5925796eb7',
      showLabel: false,
      type: 'button',
      formControlName: 'button88FormControl',
      btnText: 'Next Question',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button88ConfigProperties',
      listOfOptions: [],
    },
    card11ConfigProperties : {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        cardComponentStyle: 'height-50 margin-top-5rem',
        cardBodyStyle:
          'box-shadow-0-20-25--5-rgb0-0-0--01-0-8-10--6-rgb0-0-0--01 border-width-1 border-style-dotted border-color-000000 border-radius-4 p-3',
      },
      isHidden: false,
      propertyName: '827601a4-cbea-483c-b04a-69babec86704',
      showLabel: false,
      type: 'card',
      formControlName: 'card11FormControl',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      icon: 'faIdCard',
      listChilds: [],
      styleType: '',
      variableName: 'card11ConfigProperties',
      listOfOptions: [],
    },
    subtitleText193ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-600 font-size-12rem',
      },
      isHidden: false,
      propertyName: '8a094b6f-ac4d-4e19-88f7-5b9510af90ad',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Sections',
      formControlName: 'subtitleText193FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText193ConfigProperties',
      listOfOptions: [],
    },
    // subtitleText204ConfigProperties : {
    //   helpText: '',
    //   styles: {
    //     componentStyle:
    //       'border-width-1 border-style-solid border-color-000000 border-radius-4 background-color-rgb246-175-115-1',
    //     supportingTextStyle: 'color-6c757d',
    //     subtitleTextStyle: 'color-black',
    //   },
    //   isHidden: false,
    //   propertyName: 'd1f27284-4eba-4645-ac21-8750b7e19b7d',
    //   showLabel: false,
    //   type: 'subtitle-text',
    //   value: 'Section '+ this.currentSectionIndex+1+': '+ this.exam.sectionExams[this.currentSectionIndex].title,
    //   formControlName: 'subtitleText204FormControl',
    //   navigateTo: '',
    //   customCssClasses: [],
    //   childs: [],
    //   icon: 'faText',
    //   listChilds: [],
    //   styleType: '',
    //   variableName: 'subtitleText204ConfigProperties',
    //   listOfOptions: [],
    // },
    // subtitleText226ConfigProperties : {
    //   helpText: '',
    //   styles: {
    //     componentStyle: 'margin-top-1rem',
    //     supportingTextStyle: 'color-6c757d',
    //     subtitleTextStyle: 'color-black',
    //   },
    //   isHidden: false,
    //   propertyName: '1dba0ea0-d649-48c1-b261-3bce94033821',
    //   showLabel: false,
    //   type: 'subtitle-text',
    //   value: 'Questions in '+this.exam.sectionExams[this.currentSectionIndex].title,
    //   formControlName: 'subtitleText226FormControl',
    //   navigateTo: '',
    //   customCssClasses: [],
    //   childs: [],
    //   icon: 'faText',
    //   listChilds: [],
    //   styleType: '',
    //   variableName: 'subtitleText226ConfigProperties',
    //   listOfOptions: [],
    // },
    button55ConfigProperties : {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        buttonStyle: 'border-radius-100-percent border-width-1 border-style-solid',
      },
      isHidden: false,
      propertyName: '53dad6db-eb2a-486f-b0fe-836a74f51571',
      showLabel: false,
      type: 'button',
      formControlName: 'button55FormControl',
      btnText: 'Q1',
      btnType: 'button',
      navigateTo: '',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faRectangleLandscape',
      listChilds: [],
      styleType: '',
      variableName: 'button55ConfigProperties',
      listOfOptions: [],
    }
  }
  }

  radioButtons12Changed(event: any) {
    this.radioButtons12ConfigProperties = event;
  }
  radioButtons13Changed(event: any) {
    this.radioButtons13ConfigProperties = event;
  }
  radioButtons14Changed(event: any) {
    this.radioButtons14ConfigProperties = event;
  }
  radioButtons15Changed(event: any) {
    this.radioButtons15ConfigProperties = event;
  }
  checkBox1Changed(event: any) {
    this.checkBox1ConfigProperties = event;
  }

  //Getting questions and options for the exam
  getExamByExamId():void{
    console.log(this.examId)
    this.examService.GetExamByExamId(this.examId).subscribe({
    next:(response)=>{
     this.exam= response.data
     console.log(this.exam)
     this.examDuration= this.exam.duration
     this.updateTimerDisplay()
     this.startStopwatch();
      this.isLoading = false;
     this.examSections = this.exam.sectionExams;
     this.updateConfigProperties()
     console.log(this.exam.sectionExams[this.currentSectionIndex].questions[this.currentQuestionIndex].options)
    },
    error:(error)=>{
      console.error('Error in fetching questions for exam:', error)
    }
    }  
    )
  }

  navigateToSection(sectionIndex: number): void {
    this.currentSectionIndex = sectionIndex;
    this.currentQuestionIndex = 0;
    this.updateConfigProperties();
  }
  
  navigateToQuestion(sectionIndex: number, questionIndex: number): void {
    this.currentSectionIndex = sectionIndex;
    this.currentQuestionIndex = questionIndex;
    this.subtitleText134ConfigProperties.value=questionIndex
    this.updateConfigProperties();
  }

  nextQuestion() {
    const questions = this.exam.sectionExams[this.currentSectionIndex].questions;
    if (this.currentQuestionIndex < questions.length) {
      console.log(this.currentQuestionIndex)
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  button77submitForm() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
    this.updateConfigProperties()
  }
  button88submitForm() {
    // Log the selected option for debugging purposes
    console.log(this.selectedOption);

    // Retrieve the current section's questions
    this.questions = this.exam.sectionExams[this.currentSectionIndex].questions;

    // If we're not on the last question of the current section, move to the next question
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.addUserAnswer();
    
        this.currentQuestionIndex++;
        
    } else {
        // If it's the last question of the section, move to the next section
        // this.goToNextSection();
        this.addUserAnswer();
       
        this.goToNextSection();
    }

    // Add the user's answer (e.g., saving the selected option for the current question)

    // Update the button config properties
    this.updateConfigProperties();
}

// Method to move to the next section
goToNextSection() {
    if (this.currentSectionIndex < this.exam.sectionExams.length - 1) {
        // Move to the next section and reset the question index to 0
        this.currentSectionIndex++;
        this.currentQuestionIndex = 0; 
    }
}

  card11Clicked() {}
  button55submitForm() {}
  button122submitForm() {}

  addUserAnswer() {
    let selectedOptions: any[] = [];
  
    // For single-choice questions (radio buttons)
    if (!this.exam.sectionExams[this.currentSectionIndex].questions[this.currentQuestionIndex].isMultipleChoice) {
      selectedOptions.push(this.selectedOption);
    }
  
    // For multiple-choice questions (checkboxes)
    if (this.exam.sectionExams[this.currentSectionIndex].questions[this.currentQuestionIndex].isMultipleChoice) {
      selectedOptions = this.selectedOptions; // Assume `selectedOptions` holds array of selected checkboxes
    }
  
    // Build the payload
    const payload = {
      questionId: this.exam.sectionExams[this.currentSectionIndex].questions[this.currentQuestionIndex].questionId,
      userExamId: sessionStorage.getItem('userExam'),
      sectionId: this.exam.sectionExams[this.currentSectionIndex].sectionId,
      optionIds: selectedOptions,
    };
  
    console.log('Payload:', payload);
  
    // Call the service to save the answer
    this.userAnswerService.AddUserAnswer(payload).subscribe({
      next: (response) => {
        console.log('User answer has been added:', response);
      },
      error: (error) => {
        console.error('Error while adding user answer:', error);
      },
    });
  }
  

  button99submitForm(){
    this.submitExam()
  }

  calculateAndCreateExamResult(userExamId:number){
    this.examService.CalculateAndCreateExamResult(userExamId).subscribe(
      {
        next:(response)=>{
          console.log(`Result has been calculated`, response);
        },
        error:(error)=>{
          console.error(`Error while calculating the result`,error);
        }
      }
    )
  }

  onCheckboxChange(event: Event, optionId: number): void {
    const isChecked = (event.target as HTMLInputElement).checked;
  
    if (isChecked) {
      // Add option to selected options
      this.selectedOptions.push(optionId);
    } else {
      // Remove option from selected options
      this.selectedOptions = this.selectedOptions.filter(id => id !== optionId);
    }
    console.log('Selected Options:', this.selectedOptions);
  }

  isOptionSelected(optionId: number): boolean {
    return this.selectedOptions.includes(optionId);
  }
  
  startStopwatch() {
    this.interval = setInterval(() => {
      if (this.seconds < 59) {
        this.seconds++;
      } else {
        this.seconds = 0;
        this.minutes++;
      }

      // Check if the time is up
      if (this.minutes === this.examDuration) {
        this.stopStopwatch();
        this.submitExam();
      }
    }, 1000);
  }

  stopStopwatch() {
    clearInterval(this.interval);
  }

  submitExam() {
    var userExamId:number=0;
    this.addUserAnswer()
    this.exam.sectionExams.forEach((section:any) => {
    userExamId = parseInt(sessionStorage.getItem('userExam') || '0', 10); // Ensure safe conversion
      if (userExamId > 0) { // Only proceed if userExamId is valid
        console.log(userExamId)
        this.examService.GenerateSectionResult(section.sectionId, userExamId).subscribe(
          (response) => {
            this.router.navigate(['/exam-history'])
            console.log(`Result for section ${section.sectionId}:`, response);
          },
          (error) => {
            console.error(`Error generating result for section ${section.sectionId}:`, error);
          }
        );
      } else {
        console.error('Invalid userExamId from session storage');
      }
    });
    this.calculateAndCreateExamResult(userExamId)
  }

  ngOnDestroy() {
    this.stopStopwatch();
  }

  updateTimerDisplay() {
    this.minutes = Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;
  }
}
