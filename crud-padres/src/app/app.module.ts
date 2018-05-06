import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { PadreService } from './padre/padre.service';

import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { PadreNewComponent } from './padre/padre-new/padre-new.component';
import { PadreListComponent } from './padre/padre-list/padre-list.component';
import { PadreEditComponent } from './padre/padre-edit/padre-edit.component';
import { PadreDetailsComponent } from './padre/padre-details/padre-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PadreComponent,
    PadreNewComponent,
    PadreListComponent,
    PadreEditComponent,
    PadreDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    PadreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
