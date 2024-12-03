import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PopupComponent } from '../../shared/components/popup/popup.component';
import { Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/Service/exam.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'admin-detailed-results',
  templateUrl: './admin-detailed-results.component.html',
  styleUrls: ['./admin-detailed-results.component.scss'],
})
export class AdminDetailedResultsComponent implements OnInit {
  @Input() examId!: any;
  public titleH3Text13ConfigProperties: any;
  public dataGrid1ConfigProperties: any;
  public dataGrid1InterfaceConfig: any;
  public detailedResultsConfigProperties: any;
  @ViewChild('detailedResultsTemplate') detailedResultsTemplate!: TemplateRef<any>;
  detailedResultsBsModalRef!: BsModalRef;
  public subtitleText110ConfigProperties: any;
  public subtitleText112ConfigProperties: any;
  public subtitleText11ConfigProperties: any;
  public examresults: any = [];

  constructor(public modalService: BsModalService, private route: ActivatedRoute, private examService: ExamService) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.examId = params.get('examId')!;
      this.loadEvents();
    });

    this.titleH3Text13ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        headingTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '41b86e8e-5cd2-44bc-8f0f-93c6de34fdc7',
      showLabel: false,
      type: 'title-h3-text',
      value: 'Detailed Results',
      formControlName: 'titleH3Text13FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faH3',
      listChilds: [],
      styleType: '',
      variableName: 'titleH3Text13ConfigProperties',
      listOfOptions: [],
    };
    this.dataGrid1ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        datagridHeaderStyle: '',
        datagridCellStyle: 'font-size-16 font-weight-400 color-000000',
        datagridPaginationStyle: '',
        datagridSearchButtonStyle:
          'height-30 padding-top-12 padding-bottom-12 padding-left-16 padding-right-16 background-color-fff border-radius-4 border-width-1 border-style-solid border-color-e0e0e0 color-000000 margin-right-10 margin-bottom-10',
        datagridBulkSaveButtonStyle:
          'background-color-0069d9 border-color-0069d9 color-white margin-right-10',
        datagridNewRowButtonStyle: 'background-color-transparent border-width-0',
        datagridStyle: 'height-400 margin-top-10',
        datagridExportButtonStyle:
          'background-color-0069d9 border-color-0069d9 color-white margin-right-10',
      },
      isHidden: false,
      propertyName: '0f697305-c14f-411d-80bd-85f4ea751eb2',
      showLabel: false,
      type: 'data-grid',
      value: [
        {
          id: 0,
          'Student Name': 'Bhushan',
          Percentage: 90,
          Status: 'Pass',
          'Section Result': 'Show',
        }
      ],
      // value: this.examresults.map((item: any, index: number) => ({
      //   id: index,
      //   'Student Name': item.name || `Name${index}`, // Default to "Name{index}" if name is missing
      //   Percentage: item.percentage || 0,           // Default to 0 if percentage is missing
      //   Status: item.resultStatus || 'Pending',     // Default to "Pending" if resultStatus is missing
      //   'Section Result': item.resultLink || 'Show' // Default to "Show" if resultLink is missing
      // })),
      
      formControlName: 'dataGrid1FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faTable',
      listChilds: [],
      styleType: '',
      variableName: 'dataGrid1ConfigProperties',
      listOfOptions: [],
    };
    this.dataGrid1InterfaceConfig = {
      tableTheme: 'ag-theme-alpine',
      isSortable: false,
      isTableSearchable: false,
      isTableFilterable: false,
      isColumnFilterable: false,
      isPaginationEnabled: true,
      dataSize: '10',
      isColumnMovable: false,
      isColumnResizable: false,
      isRowSelected: false,
      isRowExpandable: false,
      isRowEditable: false,
      isExportToCSVEnabled: false,
      isBulkAddEnabled: false,
      isBulkEditEnabled: false,
      isTableRefreshable: false,
      isRowAddable: false,
      addBtnLabel: 'New Row',
      isRowDeletable: false,
      isEditDrawerEnabled: false,
      columns: [
        {
          label: 'Student Name',
          type: 'text',
          dropdownOptions: [],
          hidden: false,
          dateFormat: 'MMM d, yyyy hh:mm:ss',
          alignment: 'left',
          tooltip: false,
          onClick: { storeRowData: false, keyToStoredData: '', navigateTo: -1, apis: [] },
          customClass: '',
          field: 'Student Name',
          editable: false,
        },
        {
          label: 'Percentage',
          type: 'number',
          dropdownOptions: [],
          hidden: false,
          dateFormat: 'MMM d, yyyy hh:mm:ss',
          alignment: 'left',
          tooltip: false,
          onClick: { storeRowData: false, keyToStoredData: '', navigateTo: -1, apis: [] },
          customClass: '',
          field: 'Percentage',
          editable: false,
        },
        {
          label: 'Status',
          type: 'text',
          dropdownOptions: [],
          hidden: false,
          dateFormat: 'MMM d, yyyy hh:mm:ss',
          alignment: 'left',
          tooltip: false,
          onClick: { storeRowData: false, keyToStoredData: '', navigateTo: -1, apis: [] },
          customClass: '',
          field: 'Status',
          editable: false,
        },
        {
          label: 'Section Result',
          type: 'link',
          dropdownOptions: [],
          hidden: false,
          dateFormat: 'MMM d, yyyy hh:mm:ss',
          alignment: 'left',
          tooltip: false,
          onClick: { storeRowData: false, keyToStoredData: '', navigateTo: 1, apis: [] },
          customClass: '',
          field: 'Section Result',
          editable: false,
        },
      ],
      apis: [],
      addRowApis: [],
      deleteRowApis: [],
    };
    this.detailedResultsConfigProperties = {
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
      propertyName: 'c61cb837-780b-4a35-82e2-487a517269f8',
      showLabel: false,
      type: 'popup',
      value: 'default',
      formControlName: 'detailedResultsFormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [
        {
          componentId: 16,
          componentName: 'Subtitle Text110',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faText',
          componentType: 'Text',
          showLabel: false,
          propertyName: '713ffa16-bd0a-4b01-8f62-2fea096bcde7',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'subtitle-text',
          sortOrder: 110,
          value: 'Total Score: ',
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
          templatePropertyId: 1,
          isDataStoredInSession: false,
          fieldStorageKeyValue: '',
          mapValuesFromProperty: '',
          index: 0,
        },
        {
          componentId: 16,
          componentName: 'Subtitle Text112',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faText',
          componentType: 'Text',
          showLabel: false,
          propertyName: '9d5af2f0-d32c-404a-ac64-7410bd64bf4c',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'subtitle-text',
          sortOrder: 120,
          value: 'Section wise result',
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
          index: 1,
        },
        {
          componentId: 16,
          componentName: 'Subtitle Text11',
          listChilds: [],
          styleType: '',
          mobileFloatAlignment: '',
          childs: [],
          icon: 'faText',
          componentType: 'Text',
          showLabel: false,
          propertyName: 'aa723298-e275-4d72-8eae-4be9b9b90a28',
          newProperty: true,
          hasChildEntity: false,
          hasPlaceholder: false,
          type: 'subtitle-text',
          sortOrder: 130,
          value: 'Pass',
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
              styleObj: { color: 'rgb(0, 169, 4, 1)', marginTop: '3%', fontWeight: '700' },
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
      ],
      icon: 'faClone',
      listChilds: [],
      styleType: '',
      variableName: 'detailedResultsConfigProperties',
      listOfOptions: [],
      modalTitle: 'Detailed Results',
    };
    this.subtitleText110ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '713ffa16-bd0a-4b01-8f62-2fea096bcde7',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Total Score: ',
      formControlName: 'subtitleText110FormControl',
      navigateTo: '',
      customCssClasses: [],
      childs: [],
      icon: 'faText',
      listChilds: [],
      styleType: '',
      variableName: 'subtitleText110ConfigProperties',
      listOfOptions: [],
    };
    this.subtitleText112ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-black',
      },
      isHidden: false,
      propertyName: '9d5af2f0-d32c-404a-ac64-7410bd64bf4c',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Section wise result',
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
    this.subtitleText11ConfigProperties = {
      helpText: '',
      styles: {
        componentStyle: '',
        supportingTextStyle: 'color-6c757d',
        subtitleTextStyle: 'color-rgb0-169-4-1 margin-top-3-percent font-weight-700',
      },
      isHidden: false,
      propertyName: 'aa723298-e275-4d72-8eae-4be9b9b90a28',
      showLabel: false,
      type: 'subtitle-text',
      value: 'Pass',
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
    console.log("Test the datagrid: "+JSON.stringify(this.dataGrid1ConfigProperties));    
  }

  private loadEvents(): void {
    this.examService.GetExamResultsByExamId(this.examId).subscribe((response : any) => {
      if (response) {
        console.log('Fetched Exam Results Deatils:', response);
        this.examresults = response.data;
        
        this.dataGrid1ConfigProperties.value = this.examresults.map((event: any, index: number) => ({
          id: index, 
          'Student Name': event.name || `Name${index}`, // Fallback to "Name{index}" if name is missing
          Percentage: event.percentage || 0,           // Default to 0 if percentage is missing
          Status: event.resultStatus || 'Pending',     // Default to "Pending" if resultStatus is missing
          'Section Result': event.resultLink || 'Show' // Default to "Show" if resultLink is missing
        }));
  
        // Optionally, log the updated value for debugging
        console.log('Updated DataGrid Config:', this.dataGrid1ConfigProperties.value);
      } else {
        console.error('No data received from the API');
      }
    }, error => {
      console.error('Error fetching exam results:', error);
    });
  }

  dataGrid1gridRowChanged(event: any) {
    this.dataGrid1ConfigProperties.value = [...event.rowData];
  }
  dataGrid1onDeleteRow(value: any) {
    this.dataGrid1ConfigProperties.value = this.dataGrid1ConfigProperties.value.filter(
      (row: any) => row.id !== value.id,
    );
  }
  dataGrid1saveBulkData(event: any) {
    this.dataGrid1ConfigProperties.value = [...event.rowData];
  }
}
