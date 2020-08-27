import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    LibreriaComponent,
    LibroComponent,
    BuscarTituloAutorPipe,
    PuntuacionLibroComponent,
    MenuNavegacionComponent,
    PiePaginaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
