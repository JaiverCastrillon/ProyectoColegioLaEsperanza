import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Padre } from '../padre';
@Component({
  selector: 'app-padre-list',
  templateUrl: './padre-list.component.html',
  styleUrls: ['./padre-list.component.css']
})
export class PadreListComponent implements OnInit {
  @Input() padres;
  @Output() destroyPadreEvent = new EventEmitter();
  @Output() updatePadreEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  destroy(padre: Padre){
    const response = confirm('delete?')
    if(response){
      this.destroyPadreEvent.emit(padre);
    }
  }

  update(padres){
    this.updatePadreEvent.emit(padres);
  }

}
