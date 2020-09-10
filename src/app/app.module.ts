import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LibreriaComponent } from './libreria/libreria.component';
import { LibroComponent } from './libro/libro.component';
import { BuscarTituloAutorPipe } from './pipes/buscar-titulo-autor.pipe';
import { PuntuacionLibroComponent } from './puntuacion-libro/puntuacion-libro.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { RouterModule } from '@angular/router';
import { rutas } from './app.routes';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent,
    BuscarTituloAutorPipe,
    PuntuacionLibroComponent,
    MenuNavegacionComponent,
    PiePaginaComponent,
    InicioComponent,
    DetalleLibroComponent,
    EditarLibroComponent,
    CrearLibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
