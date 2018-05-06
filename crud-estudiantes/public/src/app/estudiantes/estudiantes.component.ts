import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from './estudiantes.service';
import { Estudiantes } from './estudiantes'

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Estudiantes[] = [];
  constructor(
    private _estudiantesService: EstudiantesService
  ) { }

  ngOnInit() {
    this.getEstudiantes();
  }

  getEstudiantes(){
    this._estudiantesService.getEstudiantes()
    .then(estudiantes => this.estudiantes = estudiantes);
  }

  create(estudiante: Estudiantes){
    this._estudiantesService.create(estudiante)
      .then(status => this.getEstudiantes())
      .catch(err => console.log(err));
  }

  destroy(estudiante: Estudiantes){
    this._estudiantesService.destroy(estudiante)
    .then(status => this.getEstudiantes())
    .catch(err => console.log(err));
  }

  update(estudiante){
    this._estudiantesService.update(estudiante)
    .then(status => this.getEstudiantes())
    .catch(err => console.log(err));
  }

}
