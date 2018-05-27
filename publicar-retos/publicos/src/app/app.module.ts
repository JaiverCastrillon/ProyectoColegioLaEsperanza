import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicarRetosComponent } from './publicar-retos/publicar-retos.component';
import { PublicarRetosAcordeonComponent } from './publicar-retos/publicar-retos-acordeon/publicar-retos-acordeon.component';
import { PublicarRetosDesplegableComponent } from './publicar-retos/publicar-retos-desplegable/publicar-retos-desplegable.component';
import { PublicarRetosFormularioComponent } from './publicar-retos/publicar-retos-formulario/publicar-retos-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicarRetosComponent,
    PublicarRetosAcordeonComponent,
    PublicarRetosDesplegableComponent,
    PublicarRetosFormularioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
