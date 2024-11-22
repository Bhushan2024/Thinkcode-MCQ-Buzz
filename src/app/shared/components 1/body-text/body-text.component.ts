import { Component, Input, OnInit, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'body-text',
  templateUrl: './body-text.component.html',
  styleUrls: ['./body-text.component.scss'],
})
export class BodyTextComponent implements OnInit {
  @Input() configProperties: any;

  private configPropertiesDiffer!: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.updateValue();

    this.configPropertiesDiffer = this.differs.find(this.configProperties).create();
  }

  ngDoCheck() {
    if (this.configPropertiesDiffer.diff(this.configProperties)) {
      this.updateValue();
    }
  }

  updateValue() {
    if (this.configProperties.value !== undefined) {
      this.configProperties.value = this.configProperties.value;
    }
  }
}
