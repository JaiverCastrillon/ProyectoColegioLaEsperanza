import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Padre} from '../padre';

@Component({
  selector: 'app-padre-edit',
  templateUrl: './padre-edit.component.html',
  styleUrls: ['./padre-edit.component.css']
})
export class PadreEditComponent implements OnInit {
  @Input() padre: Padre;
  updatePadre: Padre = new Padre;
  @Output() updatePadreEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  update(){
    this.updatePadre.editable = false;
    //this.updatePadreEvent.emit(this.updatePadre);
    this.updatePadreEvent.emit({
      original : this.padre,
      updated : this.updatePadre
    });
  }

}
