import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Padre} from '../padre';

@Component({
  selector: 'app-padre-new',
  templateUrl: './padre-new.component.html',
  styleUrls: ['./padre-new.component.css']
})
export class PadreNewComponent implements OnInit {
  @Output() createNewPadreEvent = new EventEmitter();
  newPadre = new Padre;
  constructor() { }

  ngOnInit() {
  }

  create(){
    this.createNewPadreEvent.emit(this.newPadre);
    this.newPadre = new Padre;
  }

}
