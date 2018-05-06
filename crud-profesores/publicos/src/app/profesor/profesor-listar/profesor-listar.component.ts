import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import {Profesor} from '../profesor';

@Component({
  selector: 'app-profesor-listar',
  templateUrl: './profesor-listar.component.html',
  styleUrls: ['./profesor-listar.component.css']
})
export class ProfesorListarComponent implements OnInit {
  @Input() profesores;
  @Output() eliminarProfesorEvent = new EventEmitter();
  @Output() editarProfesorEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  eliminar(profesor: Profesor){
    if (confirm("borrar a " + profesor.nombre)){
     this.eliminarProfesorEvent.emit(profesor);
    }
  }

  editar(profesor){
    this.editarProfesorEvent.emit(profesor);
  }

}
