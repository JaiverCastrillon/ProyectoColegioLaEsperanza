import { Component, OnInit } from '@angular/core';
import { PadreService } from './padre.service';
import { Padre } from './padre';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  padres : Padre[] = [
    new Padre(1, 1234, 'Jose', 'Castro Arias', 12, 98765, 'joseocastro@gmail.com'),
    new Padre(2, 1234, 'Jose', 'Castro Arias', 12, 98765, 'joseocastro@gmail.com'),
    new Padre(3, 1234, 'Jose', 'Castro Arias', 12, 98765, 'joseocastro@gmail.com')
  ];
  constructor(
    private _padreService: PadreService
  ) { }

  ngOnInit() {
    //this.getPadres();
  }

  getPadres(){
    //this._padreService.getPadres()
    //.then(padres => this.padres = padres);
  }

  create(padre: Padre){
    this.padres.push(padre);
  }

  destroy(padre: Padre){
    const i=this.padres.indexOf(padre);
    this.padres.splice(i, 1);
  }

  update(padres){
    const i=this.padres.indexOf(padres.original);
    this.padres[i]=padres.updated;
  }

}
