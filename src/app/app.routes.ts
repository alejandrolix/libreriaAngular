import { Route } from '@angular/router';
import { LibreriaComponent } from './libreria/libreria.component';
import { InicioComponent } from './inicio/inicio.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';

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
    path: 'libros/:id/detalle',
    component: DetalleLibroComponent
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
