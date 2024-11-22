import { Component, Input, OnInit, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'title-h3-text',
  templateUrl: './title-h3-text.component.html',
  styleUrls: ['./title-h3-text.component.scss'],
})
export class TitleH3TextComponent implements OnInit {
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
