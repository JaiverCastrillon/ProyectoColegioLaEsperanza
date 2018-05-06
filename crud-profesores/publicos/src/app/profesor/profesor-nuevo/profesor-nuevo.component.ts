import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Profesor } from '../profesor';

@Component({
  selector: 'app-profesor-nuevo',
  templateUrl: './profesor-nuevo.component.html',
  styleUrls: ['./profesor-nuevo.component.css']
})
export class ProfesorNuevoComponent implements OnInit {
  @Output() crearNuevoProfesorEvent = new EventEmitter();

  nuevoProfesor = new Profesor;

  constructor() { }

  ngOnInit() {
  }

  crear(){
    this.crearNuevoProfesorEvent.emit(this.nuevoProfesor);
    this.nuevoProfesor = new Profesor;
  }  
}
