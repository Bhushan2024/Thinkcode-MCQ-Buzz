import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as icons from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  @Input() configProperties: any;
  @Output() configPropertiesChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  getIcons(icon: string) {
    return (icons as any)[icon];
  }

  onIconChanged() {
    this.configPropertiesChanged.emit(this.configProperties);
  }
}
