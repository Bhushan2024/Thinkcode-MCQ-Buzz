import { Component, Input, OnInit, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Component({
  selector: 'subtitle-text',
  templateUrl: './subtitle-text.component.html',
  styleUrls: ['./subtitle-text.component.scss'],
})
export class SubtitleTextComponent implements OnInit {
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
