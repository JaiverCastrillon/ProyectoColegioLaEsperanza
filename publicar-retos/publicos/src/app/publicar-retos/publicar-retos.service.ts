import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Materia } from './materia';
import { Curso } from './curso';
import { Grado } from './grado';
import { Profesor } from './profesor';
import { Reto } from './reto';
import { Tema } from './tema';
import "rxjs";
import { Observable } from 'rxjs';

export class PublicarRetosService {

  constructor(
    private _http:Http
  ) { }
  
  /*
  Metodo para obtener el objeto de un profesor dada su cedula
  */
  getProfesor(profesor: Profesor) { 
    return this._http.get('/profesores/' + profesor.cc)
    .map(data => data.json()).toPromise()
  }

    /*
  Metodo para obtener la lista de temas de una materia dado su codigo
  */
  getTemas(materia: Materia) { 
    return this._http.get('/profesores/' + materia.codigo)
    .map(data => data.json()).toPromise()
  }

  /*
  Metodo para obtener todos los temas
  */
 getNombresTemas() { 
  return this._http.get('/profesores/')
  .map(data => data.json()).toPromise()
}



}

