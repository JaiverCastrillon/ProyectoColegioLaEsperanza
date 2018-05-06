import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProfesorService } from './profesor/profesor.service';

import { AppComponent } from './app.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesorNuevoComponent } from './profesor/profesor-nuevo/profesor-nuevo.component';
import { ProfesorListarComponent } from './profesor/profesor-listar/profesor-listar.component';
import { ProfesorEditarComponent } from './profesor/profesor-editar/profesor-editar.component';
import { ProfesorDetallesComponent } from './profesor/profesor-detalles/profesor-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesorComponent,
    ProfesorNuevoComponent,
    ProfesorListarComponent,
    ProfesorEditarComponent,
    ProfesorDetallesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProfesorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
