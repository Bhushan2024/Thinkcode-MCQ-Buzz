import { Component, OnInit } from '@angular/core';
import { ExamService } from 'src/app/Service/exam.service'; // Custom service for exam-related operations

@Component({
  selector: 'admin-exam',
  templateUrl: './admin-exam.component.html',
  styleUrls: ['./admin-exam.component.scss'],
})
export class AdminExamComponent implements OnInit {
  public card51ConfigProperties: any;
  public subtitleText61ConfigProperties: any;
  public bodyText31ConfigProperties: any;
  public bodyText32ConfigProperties: any;
  public bodyText33ConfigProperties: any;
  public bodyText34ConfigProperties: any;
  public bodyText35ConfigProperties: any;
  public button91ConfigProperties: any;
  public button92ConfigProperties: any;
  public button93ConfigProperties: any;

  public exams: any[] = []; // Stores fetched exams
  public teacherId: string | null = null; // Current teacher ID
  public cardsConfigProperties: any[] = []; // Dynamic card configurations

  constructor(private examService: ExamService) {}

  ngOnInit(): void {
    this.teacherId = localStorage.getItem('currentUserId'); // Get teacher ID from localStorage
    if (this.teacherId) {
      console.log("Teacher ID:", this.teacherId);
      this.fetchExams();
    }

    this.initializeConfigProperties(); // Initialize default config properties
  }

  /**
   * Fetches exams for the logged-in teacher using the teacher's ID.
   */
  private fetchExams(): void {
    this.examService.getExamsByTeacherId(this.teacherId!).subscribe({
      next: (response) => {
        this.exams = response.data; // Update exams array with fetched data
        console.log('Fetched Exams:', response.data);
        this.updateConfigProperties(); // Update config properties dynamically
      },
      error: (error) => {
        console.error('Error fetching exams:', error);
      },
    });
  }

  /**
   * Initializes default static configurations for the component properties.
   */
  private initializeConfigProperties(): void {
    this.card51ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        cardComponentStyle: 'height-50',
        cardBodyStyle:
          'border-width-1 border-style-solid border-color-000000 border-radius-4 padding-top-12 padding-left-16 padding-right-16 padding-bottom-12',
      },
      isHidden: false,
      propertyName: 'default_card',
      showLabel: false,
      type: 'card',
      formControlName: 'card51FormControl',
      navigateTo: '',
      customCssClasses: [],
      icon: 'faIdCard',
    };

    this.subtitleText61ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'default_subtitle',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Exam Title',
      formControlName: 'subtitleText61FormControl',
      customCssClasses: [],
      icon: 'faText',
    };

    this.bodyText31ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        bodyTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'default_bodyText',
      showLabel: false,
      type: 'body-text',
      value: 'Exam Description',
      formControlName: 'bodyText31FormControl',
      customCssClasses: [],
      icon: 'faBold',
    };
    this.bodyText32ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        bodyTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'default_bodyText',
      showLabel: false,
      type: 'body-text',
      value: 'Exam Description',
      formControlName: 'bodyText31FormControl',
      customCssClasses: [],
      icon: 'faBold',
    };
    this.bodyText33ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        bodyTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'default_bodyText',
      showLabel: false,
      type: 'body-text',
      value: 'Exam Description',
      formControlName: 'bodyText31FormControl',
      customCssClasses: [],
      icon: 'faBold',
    };
    this.bodyText34ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        bodyTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'default_bodyText',
      showLabel: false,
      type: 'body-text',
      value: 'Exam Description',
      formControlName: 'bodyText31FormControl',
      customCssClasses: [],
      icon: 'faBold',
    };
    this.bodyText35ConfigProperties = {
      helpText: '',
      styles: {
        supportingTextStyle: 'color-6c757d',
        bodyTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: 'default_bodyText',
      showLabel: false,
      type: 'body-text',
      value: 'Exam Description',
      formControlName: 'bodyText31FormControl',
      customCssClasses: [],
      icon: 'faBold',
    };

    this.button91ConfigProperties = {
      helpText: '',
      styles: {
        buttonStyle:
          'border-radius-4 border-width-1 padding-top-1-percent padding-bottom-1-percent width-25-percent background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: 'edit_button',
      showLabel: false,
      type: 'button',
      formControlName: 'button91FormControl',
      btnText: 'Add Section',
      btnType: 'button',
      customCssClasses: [],
      icon: 'faRectangleLandscape',
    };

    this.button93ConfigProperties = {
      helpText: '',
      styles: {
        buttonStyle:
          'border-radius-4 border-width-1 padding-top-1-percent padding-bottom-1-percent width-25-percent background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: 'edit_button',
      showLabel: false,
      type: 'button',
      formControlName: 'button91FormControl',
      btnText: 'Show Section',
      btnType: 'button',
      customCssClasses: [],
      icon: 'faRectangleLandscape',
    };
    this.button92ConfigProperties = {
      helpText: '',
      styles: {
        buttonStyle:
          'border-radius-4 border-width-1 padding-top-1-percent padding-bottom-1-percent background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
      },
      isHidden: false,
      propertyName: 'add_exam_button',
      showLabel: false,
      type: 'button',
      formControlName: 'button92FormControl',
      btnText: 'Add Exam',
      btnType: 'button',
      customCssClasses: [],
      icon: 'faRectangleLandscape',
    };
  }

  /**
   * Updates dynamic card configurations based on the fetched exams.
   */
  private updateConfigProperties(): void {
    this.cardsConfigProperties = this.exams.map((exam) => ({
      card51ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          cardComponentStyle: 'height-50',
          cardBodyStyle:
            'border-width-1 border-style-solid border-color-000000 border-radius-4 padding-top-12 padding-left-16 padding-right-16 padding-bottom-12',
        },
        isHidden: false,
        propertyName: exam.id,
        showLabel: false,
        type: 'card',
        formControlName: `card_${exam.id}`,
        customCssClasses: [],
        icon: 'faIdCard',
      },
      subtitleText61ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          subtitleTextStyle: 'color-black',
        },
        isHidden: false,
        propertyName: `subtitle_${exam.id}`,
        showLabel: false,
        type: 'subtitle-text',
        value: exam.title,
        formControlName: `subtitleText_${exam.id}`,
        customCssClasses: [],
        icon: 'faText',
      },
      bodyText31ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          bodyTextStyle: 'color-black',
        },
        isHidden: false,
        propertyName: `bodyText_${exam.id}`,
        showLabel: false,
        type: 'body-text',
        value: exam.description,
        formControlName: `bodyText_${exam.id}`,
        customCssClasses: [],
        icon: 'faBold',
      },
      bodyText32ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          bodyTextStyle: 'color-black',
        },
        isHidden: false,
        propertyName: `bodyText_${exam.id}`,
        showLabel: false,
        type: 'body-text',
        value:`Start Date: ${exam.startDate}`,
        formControlName: `bodyText_${exam.id}`,
        customCssClasses: [],
        icon: 'faBold',
      },
      bodyText33ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          bodyTextStyle: 'color-black',
        },
        isHidden: false,
        propertyName: `bodyText_${exam.id}`,
        showLabel: false,
        type: 'body-text',
        value:`End Date: ${exam.endDate}`,
        formControlName: `bodyText_${exam.id}`,
        customCssClasses: [],
        icon: 'faBold',
      },
      bodyText34ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          bodyTextStyle: 'color-black',
        },
        isHidden: false,
        propertyName: `bodyText_${exam.id}`,
        showLabel: false,
        type: 'body-text',
        value:`Duration: ${exam.duration} min.`,
        formControlName: `bodyText_${exam.id}`,
        customCssClasses: [],
        icon: 'faBold',
      },
      bodyText35ConfigProperties: {
        helpText: '',
        styles: {
          supportingTextStyle: 'color-6c757d',
          bodyTextStyle: 'color-black',
        },
        isHidden: false,
        propertyName: `bodyText_${exam.id}`,
        showLabel: false,
        type: 'body-text',
        value: `Exam Status: ${exam.isActive ? 'Active' : 'Inactive'}`,
        formControlName: `bodyText_${exam.id}`,
        customCssClasses: [],
        icon: 'faBold',
      },
      button91ConfigProperties: {
        helpText: '',
        styles: {
          buttonStyle:
            'border-radius-4 border-width-1 padding-top-1-percent padding-bottom-1-percent width-25-percent background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
        },
        isHidden: false,
        propertyName: `edit_${exam.id}`,
        showLabel: false,
        type: 'button',
        formControlName: `buttonEdit_${exam.id}`,
        btnText: 'Add Section',
        btnType: 'button',
        customCssClasses: [],
        icon: 'faRectangleLandscape',
      },
      button93ConfigProperties: {
        helpText: '',
        styles: {
          buttonStyle:
            'border-radius-4 border-width-1 padding-top-1-percent padding-bottom-1-percent width-25-percent background-color-rgb74-21-72-1 font-size-16 font-weight-400 color-rgb255-255-255-1',
        },
        isHidden: false,
        propertyName: `edit_${exam.id}`,
        showLabel: false,
        type: 'button',
        formControlName: `buttonEdit_${exam.id}`,
        btnText: 'Show Section',
        btnType: 'button',
        customCssClasses: [],
        icon: 'faRectangleLandscape',
      },
    }));
  }

  /**
   * Event handlers for buttons and cards.
   */
  card51Clicked(): void {
    console.log('Card clicked.');
  }

  button91submitForm(): void {
    console.log('Edit button clicked.');
  }

  button92submitForm(): void {
    console.log('Add Exam button clicked.');
  }
  button93submitForm(): void {
    console.log('Add Exam button clicked.');
  }
  
}
