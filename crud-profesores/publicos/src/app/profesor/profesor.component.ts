import { Component, OnInit } from '@angular/core';

import { ProfesorService } from './profesor.service';
import { Profesor } from './profesor';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  profesores: Profesor[] = []; 

  constructor(
    private _servicioProfesor: ProfesorService
  ) { }

  ngOnInit() {
    this.getProfesores();
  }

  getProfesores(){
    this._servicioProfesor.getProfesores()
      .then(profesores => this.profesores = profesores);
  }

  crear(profesor: Profesor){
    //console.log(profesor);
    //this.profesores.push(profesor);
    this._servicioProfesor.crear(profesor)   
      .then(status => this.getProfesores())
      .catch(err => console.log(err));
  }

  eliminar(profesor: Profesor){
    this._servicioProfesor.eliminar(profesor)
      .then(status => this.getProfesores())
      .catch(err => console.log(err));  

    //const i = this.profesores.indexOf(profesor);
    //this.profesores.splice(i, 1);
  }
  
  editar(profesor){
    //console.log(profesor)
    this._servicioProfesor.actualizar(profesor)
      .then(status => this.getProfesores())
      .catch(err => console.log(err));
  }
}
