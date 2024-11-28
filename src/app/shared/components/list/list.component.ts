import {
  Component,
  Input,
  OnInit,
  KeyValueDiffer,
  KeyValueDiffers,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() configProperties: any;
  @Input() formValidation: any;
  @Output() configPropertiesChanged = new EventEmitter<string>();

  public form!: FormGroup;
  private configPropertiesDiffer!: KeyValueDiffer<string, any>;
  isOrderedList = false;
  constructor(
    private fb: FormBuilder,
    private differs: KeyValueDiffers,
  ) {}
  ngOnInit() {
    if (
      this.configProperties.value === 'circle' ||
      this.configProperties.value === 'disc' ||
      this.configProperties.value === 'square'
    ) {
      this.isOrderedList = false;
    } else {
      this.isOrderedList = true;
    }
    this.form = this.fb.group({
      [this.configProperties.formControlName]: [''],
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
      this.form
        ?.get(this.configProperties.formControlName)
        ?.setValue(this.configProperties.listChilds);
    }
  }

  onListChanged() {
    this.configProperties.listChilds = this.form?.get(this.configProperties.formControlName)?.value;
    this.configPropertiesChanged.emit(this.configProperties);
  }
}
