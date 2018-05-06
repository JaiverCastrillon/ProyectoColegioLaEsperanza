import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Profesor} from '../profesor';

@Component({
  selector: 'app-profesor-editar',
  templateUrl: './profesor-editar.component.html',
  styleUrls: ['./profesor-editar.component.css']
})
export class ProfesorEditarComponent implements OnInit {

  @Input() profesor: Profesor;
  editProfesor:Profesor = new Profesor;
  @Output() editarProfesorEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    Object.assign(this.editProfesor, this.profesor);
  }

  editar(){
    this.editProfesor.editable = false;
    this.editarProfesorEvent.emit(this.editProfesor);
  }

}
