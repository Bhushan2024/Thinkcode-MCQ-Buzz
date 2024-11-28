import { Component, Input, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
@Component({
  selector: 'popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  @Input() configProperties: any;
  @Input() dynamicContent: any;
  faTimes = faTimes as IconProp;
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  closeModal() {
    this.modalService.hide();
  }
}
