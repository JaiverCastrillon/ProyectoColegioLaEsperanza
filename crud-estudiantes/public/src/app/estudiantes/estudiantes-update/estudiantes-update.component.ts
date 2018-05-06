import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiantes } from '../estudiantes';

@Component({
  selector: 'app-estudiantes-update',
  templateUrl: './estudiantes-update.component.html',
  styleUrls: ['./estudiantes-update.component.css']
})
export class EstudiantesUpdateComponent implements OnInit {
  @Input() estudiante: Estudiantes;
  updateEstudiante : Estudiantes = new Estudiantes;
  @Output() updateEstudianteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    Object.assign(this.updateEstudiante, this.estudiante);
  }

  update(){
    this.updateEstudiante.editable = false;
    this.updateEstudianteEvent.emit(this.updateEstudiante);
  }

}
