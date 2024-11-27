import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'link-text',
  templateUrl: './link-text.component.html',
  styleUrls: ['./link-text.component.scss'],
})
export class LinkTextComponent implements OnInit {
  @Input() configProperties: any;
  @Output() configPropertiesChanged = new EventEmitter<string>();

  constructor() {}
  ngOnInit() {}
  navigateToAnotherPage() {}
  onLinkTextChanged() {
    this.configPropertiesChanged.emit(this.configProperties);
  }
}
