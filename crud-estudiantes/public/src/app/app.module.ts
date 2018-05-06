import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { EstudiantesService } from './estudiantes/estudiantes.service';

import { AppComponent } from './app.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { EstudiantesAddComponent } from './estudiantes/estudiantes-add/estudiantes-add.component';
import { EstudiantesShowComponent } from './estudiantes/estudiantes-show/estudiantes-show.component';
import { EstudiantesUpdateComponent } from './estudiantes/estudiantes-update/estudiantes-update.component';
import { EstudiantesDetailsComponent } from './estudiantes/estudiantes-details/estudiantes-details.component';


@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    EstudiantesAddComponent,
    EstudiantesShowComponent,
    EstudiantesUpdateComponent,
    EstudiantesDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    EstudiantesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
