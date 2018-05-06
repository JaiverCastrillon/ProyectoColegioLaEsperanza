import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Profesor } from './profesor';
import "rxjs";
import { Observable } from 'rxjs';


@Injectable()
export class ProfesorService {

  constructor(
    private _http:Http
  ) { }

  crear(profesor: Profesor) { 
    return this._http.post('/profesores', profesor)
    .map(data => data.json()).toPromise()
   }

  eliminar(profesor: Profesor) {
    return this._http.delete('/profesores/' + profesor._id)
    .map(data => data.json()).toPromise()
   }

  actualizar(profesor: Profesor) { 
    return this._http.put('/profesores/' + profesor._id, profesor)
    .map(data => data.json()).toPromise()
  }

  getProfesores() { 
    return this._http.get('/profesores/')
    .map(data => data.json()).toPromise()
  }

  getProfesor(profesor: Profesor) { 
    return this._http.get('/profesores/' + profesor._id)
    .map(data => data.json()).toPromise()
  }

}
