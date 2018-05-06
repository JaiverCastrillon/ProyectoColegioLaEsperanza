import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Estudiantes } from './estudiantes';
import "rxjs";
import { Observable } from 'rxjs';

@Injectable()
export class EstudiantesService {

  constructor(
    private _http:Http
  ) { }

create(estudiante: Estudiantes) {
  return this._http.post('/estudiantes', estudiante)
  .map(data => data.json()).toPromise()
}

destroy(estudiante: Estudiantes) {
  return this._http.delete('/estudiantes/' + estudiante._id)
  .map(data => data.json()).toPromise()
}

update(estudiante: Estudiantes) {
  return this._http.put('/estudiantes/' + estudiante._id, estudiante)
  .map(data => data.json()).toPromise()
}

getEstudiantes() {
  return this._http.get('/estudiantes/')
  .map(data => data.json()).toPromise()
}

getEstudiante(estudiante: Estudiantes) {
  return this._http.get('/estudiantes/' + estudiante._id)
  .map(data => data.json()).toPromise()
}

}



