import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Estudiantes } from '../estudiantes';

@Component({
  selector: 'app-estudiantes-show',
  templateUrl: './estudiantes-show.component.html',
  styleUrls: ['./estudiantes-show.component.css']
})
export class EstudiantesShowComponent implements OnInit {
  @Input() estudiantes;
  @Output() destroyEstudianteEvent = new EventEmitter();
  @Output() updateEstudianteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  destroy(estudiante: Estudiantes){
    const response = confirm('delete?')
    if(response){
      this.destroyEstudianteEvent.emit(estudiante);
    }
  }

  update(estudiante){
    this.updateEstudianteEvent.emit(estudiante);
  }

}
