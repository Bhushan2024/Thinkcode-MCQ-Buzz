import {
  Component,
  Input,
  OnInit,
  KeyValueDiffer,
  KeyValueDiffers,
  Output,
  EventEmitter,
  AfterViewInit,
  ElementRef,
  HostListener,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  standalone:false
})
export class TextareaComponent implements OnInit, AfterViewInit {
  @Input() configProperties: any;
  @Input() formValidation: any;
  @Input() autoResize: boolean | undefined;
  @Input() variant: 'filled' | 'outlined' = 'outlined';
  @Output() configPropertiesChanged = new EventEmitter<string>();
  @Input() disabled: boolean | undefined;
  @Input() elementFormControlName: string = '';
  @Input() helpText: string | undefined;
  @Input() isHidden: boolean | undefined;
  @Input() customCssClasses: string[] | undefined;
  @Input() showLabel: boolean | undefined;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  public form!: FormGroup;
  private configPropertiesDiffer!: KeyValueDiffer<string, any>;
  @ViewChild('textarea') textarea!: ElementRef;
  filled: boolean | undefined;
  constructor(
    private fb: FormBuilder,
    private differs: KeyValueDiffers,
    public el: ElementRef,
  ) {}

  ngOnInit() {
    this.helpText = this.helpText || this?.configProperties?.helpText || '';
    this.label = this.label || this?.configProperties?.displayName || '';
    this.placeholder = this.placeholder || this?.configProperties?.placeHolder || '';
    this.elementFormControlName =
      this.elementFormControlName || this?.configProperties?.formControlName || '';
    this.isHidden = this.isHidden !== undefined ? this.isHidden : this?.configProperties?.isHidden;
    this.showLabel =
      this.showLabel !== undefined ? this.showLabel : this?.configProperties?.showLabel;
    this.customCssClasses = this.customCssClasses || this?.configProperties?.customCssClasses || [];
    this.form = this.fb.group({
      [this.elementFormControlName]: ['', this.getValidations()],
    });
    this.updateFormControlValue();
    this.configPropertiesDiffer = this.differs.find(this.configProperties).create();
    if (this.autoResize && this.textarea) this.resize();
  }

  ngAfterViewInit() {
    if (this.autoResize && this.textarea) this.resize();
  }

  @HostListener('input', ['$event'])
  onInput(e: Event) {
    this.updateState();
  }

  updateState() {
    if (this.variant === 'filled') {
      this.updateFilledState();
    }
    if (this.autoResize && this.textarea) {
      this.resize();
    }
  }

  updateFilledState() {
    const textarea = this.textarea.nativeElement;
    this.filled = textarea.value && textarea.value.length;
    if (this.filled) {
      textarea.classList.remove('p-variant-filled');
    } else {
      textarea.classList.add('p-variant-filled');
    }
  }

  resize() {
    const textarea = this.textarea.nativeElement;
    textarea.style.setProperty('height', 'auto', 'important');
    textarea.style.setProperty('height', textarea.scrollHeight + 'px', 'important');
    if (parseFloat(textarea.style.height) >= parseFloat(textarea.style.maxHeight)) {
      textarea.style.overflowY = 'scroll';
      textarea.style.setProperty('height', textarea.style.maxHeight, 'important');
    } else {
      textarea.style.overflow = 'hidden';
    }
  }

  ngDoCheck() {
    if (this.configPropertiesDiffer.diff(this.configProperties)) {
      this.updateFormControlValue();
    }
  }

  updateFormControlValue() {
    if (this.configProperties.value !== undefined) {
      this.form?.get(this.elementFormControlName)?.setValue(this.configProperties.value);
    }
  }

  getValidations() {
    let validations: any[] = [];
    if (!this.isReadOnly()) {
      this.formValidation.validations.forEach((v: any) => {
        switch (v.validationType) {
          case 'mandatory':
            if (v.required) {
              validations.push(Validators.required);
            }
            break;
          case 'min':
            if (v.required) {
              validations.push(Validators.minLength(v.value));
            }
            break;
          case 'max':
            if (v.required) {
              validations.push(Validators.maxLength(v.value));
            }
            break;
        }
      });
      return validations;
    } else {
      return validations;
    }
  }

  isReadOnly(): boolean {
    if (this.disabled !== undefined) {
      return this.disabled;
    } else {
      const item = this.formValidation.validations.find(
        (item: any) => item.validationType === 'readonly',
      );
      return item ? item.required : false;
    }
  }

  isMandatory() {
    return (
      this.formValidation.validations.find((val: any) => val.validationType === 'mandatory')
        ?.required ?? false
    );
  }

  onTextareaChanged() {
    this.configProperties.value = this.form?.get(this.elementFormControlName)?.value;
    this.configPropertiesChanged.emit(this.configProperties);
  }
}
