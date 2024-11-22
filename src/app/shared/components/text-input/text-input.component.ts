import {
  Component,
  Input,
  OnInit,
  KeyValueDiffer,
  KeyValueDiffers,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  @Input() configProperties: any;
  @Input() formValidation: any;
  @Output() configPropertiesChanged = new EventEmitter<string>();
  public form!: FormGroup;
  private configPropertiesDiffer!: KeyValueDiffer<string, any>;
  constructor(
    private fb: FormBuilder,
    private differs: KeyValueDiffers,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      [this.configProperties.formControlName]: ['', this.getValidations()],
    });
    this.updateFormControlValue();
    this.configPropertiesDiffer = this.differs.find(this.configProperties).create();
  }

  ngDoCheck() {
    if (this.configPropertiesDiffer.diff(this.configProperties)) {
      this.updateFormControlValue();
    }
  }

  updateFormControlValue() {
    if (this.configProperties.value !== undefined) {
      this.form?.get(this.configProperties.formControlName)?.setValue(this.configProperties.value);
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
    const item = this.formValidation.validations.find(
      (item: any) => item.validationType === 'readonly',
    );
    return item ? item.required : false;
  }

  isMandatory() {
    return (
      this.formValidation.validations.find((val: any) => val.validationType === 'mandatory')
        ?.required ?? false
    );
  }

  onTextInputChanged() {
    this.configProperties.value = this.form?.get(this.configProperties.formControlName)?.value;
    this.configPropertiesChanged.emit(this.configProperties);
  }
}