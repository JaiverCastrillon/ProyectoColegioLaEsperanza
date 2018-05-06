import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Padre } from './padre';
import "rxjs";
import { Observable } from 'rxjs';

@Injectable()
export class PadreService {

  constructor(
    private _http:Http
  ) { }

  create(padre: Padre){
    return this._http.post('/padre', padre)
    .map(data => data.json()).toPromise()
  }

  destroy(padre: Padre){
    return this._http.delete('/padre' + padre._id)
    .map(data => data.json()).toPromise
  }

  update(padre: Padre){
    return this._http.put('/padre' + padre._id, padre)
    .map(data => data.json()).toPromise()
  }

  getPadres(){
    return this._http.get('/padre')
    .map(data => data.json()).toPromise()
  }

  getPadre(padre: Padre){
    return this._http.get('/padre' + padre._id)
    .map(data => data.json()).toPromise()
  }

}
