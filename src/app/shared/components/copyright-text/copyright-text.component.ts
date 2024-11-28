import { Component, Input, OnInit, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'copyright-text',
  templateUrl: './copyright-text.component.html',
  styleUrls: ['./copyright-text.component.scss'],
})
export class CopyrightTextComponent implements OnInit {
  @Input() configProperties: any;
  year: any;

  private configPropertiesDiffer!: KeyValueDiffer<string, any>;

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.year = new Date().getFullYear();

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
