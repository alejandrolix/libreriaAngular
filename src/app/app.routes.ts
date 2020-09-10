import { Route } from '@angular/router';
import { LibreriaComponent } from './libreria/libreria.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import { ComprobarCodLibroGuard } from './guards/comprobar-cod-libro.guard';
import { EditarLibroComponent } from './editar-libro/editar-libro.component';
import { CrearLibroComponent } from './crear-libro/crear-libro.component';

export const rutas: Route[] = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'libros',
    component: LibreriaComponent
  },
  {
    path: 'libros/crear',
    component: CrearLibroComponent
  },
  {
    path: 'libros/:cod/detalle',
    canActivate: [ComprobarCodLibroGuard],
    component: DetalleLibroComponent
  },
  {
    path: 'libros/:cod/editar',
    component: EditarLibroComponent
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/libros'
  }
];
