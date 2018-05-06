import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Estudiantes } from '../estudiantes';

@Component({
  selector: 'app-estudiantes-add',
  templateUrl: './estudiantes-add.component.html',
  styleUrls: ['./estudiantes-add.component.css']
})
export class EstudiantesAddComponent implements OnInit {
 @Output() createNewEstudianteEvent = new EventEmitter();
 newEstudiante = new Estudiantes;
  constructor() { }

  ngOnInit() {
  }

 create(){
   this.createNewEstudianteEvent.emit(this.newEstudiante);
   this.newEstudiante = new Estudiantes;
 }

}
