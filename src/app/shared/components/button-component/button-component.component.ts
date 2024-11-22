import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.scss'],
})
export class ButtonComponent {
  @Input() configProperties: any;
  @Output() submitForm = new EventEmitter<any>();

  constructor() {}

  onSubmitForm() {
    this.submitForm.emit();
  }
}
