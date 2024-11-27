import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/Service/exam.service';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.scss'],
})
export class AdminResultComponent implements OnInit {
  public titleH3Text11ConfigProperties: any;
  public subtitleText11ConfigProperties: any;
  public icon21ConfigProperties: any;
  public subtitleText13ConfigProperties: any;
  public titleH3Text12ConfigProperties: any;
  public supportingText11ConfigProperties: any;
  public subtitleText14ConfigProperties: any;
  public subtitleText15ConfigProperties: any;
  public linkText1ConfigProperties: any;
  public teacherId: string | null = null;
    public examresults: any[] = [];
    examresultlist: any[] = [];




  constructor(private examService: ExamService, private router: Router) {}

  ngOnInit() {
    this.teacherId = localStorage.getItem('currentUserId'); 
    if (this.teacherId) {
      this.fetchExams();
    }

    this.titleH3Text11ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'b2c00531-e7dc-47ef-9cae-2bc11f72f041',
      showLabel: false,
      type: 'title-h3-text',
      value: 'Exam Wise Result',
      formControlName: 'titleH3Text11FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faH3',
      listChilds: [],
      styleType: '',
      variableName: 'titleH3Text11ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText11ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black font-weight-700 margin-top-10-percent',
      },
      isHidden: false,
      propertyName: '824b16f9-93bd-44cc-9a4c-60f39dc5aaed',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Exam_Name',
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
    this.icon21ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-right-5rem',
        supportingTextStyle: 'color-6c757d',
        iconStyle: 'color-rgb0-193-0-1',
      },
      isHidden: false,
      propertyName: '8a740ed5-ce77-4963-ba34-a0c87483eedb',
      showLabel: false,
      type: 'icon',
      value: 'faCircleDot',
      formControlName: 'icon21FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faIcons',
      listChilds: [],
      styleType: '',
      variableName: 'icon21ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText13ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: 'margin-left-1rem',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'b62d8d4a-ab34-4932-9e58-b01ae410e55a',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Active',
      formControlName: 'subtitleText13FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText13ConfigProperties',
      listOfOptions: [],
    };
    this.titleH3Text12ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-rgb28-136-227-1 font-weight-800',
      },
      isHidden: false,
      propertyName: 'd166225a-c143-428b-86b4-b50a57bfa00b',
      showLabel: false,
      type: 'title-h3-text',
      value: '00.00%',
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
    this.supportingText11ConfigProperties = {
      helpText: '',
      styles: { componentStyle: '', supportingTextStyle: 'color-6c757d padding-top-none' },
      isHidden: false,
      propertyName: '229520e1-c236-4eaf-9c62-eda54cb0690c',
      showLabel: false,
      type: 'supporting-text',
      value: 'Overall Pass Rate',
      formControlName: 'supportingText11FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faFont',
      listChilds: [],
      styleType: '',
      variableName: 'supportingText11ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText14ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '53e05cb0-fe03-4644-ad69-caaa4770d497',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Passed Student: 0',
      formControlName: 'subtitleText14FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText14ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText15ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '6e1505cb-a371-4969-abcb-98494148e5b4',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Total Student: 1',
      formControlName: 'subtitleText15FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText15ConfigProperties',
      listOfOptions: [],
    };
    this.linkText1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        linkStyle: 'font-size-16 font-weight-800 color-rgb255-31-31-1',
      },
      isHidden: false,
      propertyName: '74cd60b4-5175-44b6-9cab-1137ee209450',
      showLabel: false,
      type: 'link-text',
      value: 'View Result',
      formControlName: 'linkText1FormControl',
      staticFn: [],
      customCssClasses: [],
      childs: [],
      icon: 'faLink',
      target: '_self',
      listChilds: [],
      styleType: '',
      variableName: 'linkText1ConfigProperties',
      listOfOptions: [],
    };
  }
  private fetchExams(): void {
    this.examService.GetExamDataByUserId(this.teacherId!).subscribe({
      next: (response) => {
        this.examresults = response.data; 
        console.log('Fetched ExamResult Data:', response.data);
        this.updateConfigProperties(); 
      },
      error: (error) => {
        console.error('Error fetching exams:', error);
      },
    });
  }
  private updateConfigProperties(): void {
    this.examresultlist = this.examresults.map((item: any) => {
      const resultTitle = {
        ...this.subtitleText11ConfigProperties,
        value: item.examName || 'Default Question Title',
      };
      const status = {
        ...this.subtitleText13ConfigProperties,
        value: item.examStatus || 'Default',
      };
      const percentage = {
        ...this.titleH3Text12ConfigProperties,
        value: `${item.overallPassStudentsPercentage}%`|| 'Default',
      };
      const passedStudent = {
        ...this.subtitleText14ConfigProperties,
        value: `Passed Student: ${item.passedStudents}`,
      };
      const totalstudent = {
        ...this.subtitleText11ConfigProperties,
        value: `Total Student: ${item.totalStudents}`,
      };
    
      // const optionsConfig = item.options.map((option: any, optIndex: number) => ({
      //   ...this.bodyText11ConfigProperties,
      //   value: `Option${optIndex + 1}. ${option.optionText}[${option.isCorrect ? 'Correct' : 'Incorrect'}] Marks:${option.marks}`,
      // }));
      console.log("Test"+this.titleH3Text11ConfigProperties);

    
      return {
        id: item.examId,
        resultTitle,
        status, percentage, passedStudent, totalstudent
      };
    });

  }

  icon21Changed(event: any) {
    this.icon21ConfigProperties = event;
  }
  linkText1Changed(event: any) {
    this.linkText1ConfigProperties = event;
    console.log("You have checked for exam Id: "+event)
  }
}
