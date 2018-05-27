import { Component, OnInit } from '@angular/core';
import { PublicarRetosService } from './publicar-retos.service';
import { Materia } from './materia';
import { Profesor } from './profesor';
import { Reto } from './reto';
import { Curso } from './curso';
import { Grado } from './grado';
import { Tema } from './tema';

@Component({
  selector: 'app-publicar-retos',
  templateUrl: './publicar-retos.component.html',
  styleUrls: ['./publicar-retos.component.css']
})
export class PublicarRetosComponent implements OnInit {

  materias: Materia[] = []; 
  profesores: Profesor[] = []; 
  retos: Reto[] = []; 
  cursos: Curso[] = []; 
  grados: Grado[] = []; 
  temas: Tema[] = []; 
  constructor(
    private _servicioRetos: PublicarRetosService
  ) { }

  ngOnInit() {
  }

  getProfesores(profesor: Profesor){
    this._servicioRetos.getProfesor(profesor)
      .then(profesores => this._servicioRetos = profesores);
  }

  getTemas(materia: Materia){
    this._servicioRetos.getTemas(materia)
      .then(materias => this._servicioRetos = materias);
  }

  getNombresTemas(){
    this._servicioRetos.getNombresTemas()
      .then(temas => this._servicioRetos = temas);
  }

}
