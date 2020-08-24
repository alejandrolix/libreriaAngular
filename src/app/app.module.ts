import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { LibroComponent } from './libro/libro.component';
import { BuscarTituloAutorPipe } from './pipes/buscar-titulo-autor.pipe';
import { PuntuacionLibroComponent } from './puntuacion-libro/puntuacion-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent,
    BuscarTituloAutorPipe,
    PuntuacionLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
