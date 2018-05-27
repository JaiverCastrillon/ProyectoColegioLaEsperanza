import { Component, OnInit } from '@angular/core';
import { PublicarRetosService } from '../publicar-retos.service';

@Component({
  selector: 'app-publicar-retos-desplegable',
  templateUrl: './publicar-retos-desplegable.component.html',
  styleUrls: ['./publicar-retos-desplegable.component.css']
})
export class PublicarRetosDesplegableComponent implements OnInit {
  selectedOption: string;
  private _servicioRetos: PublicarRetosService
  constructor() { }

  ngOnInit() {
  }

}
