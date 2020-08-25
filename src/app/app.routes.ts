import { Route } from '@angular/router';
import { LibreriaComponent } from './libreria/libreria.component';

export const rutas: Route[] = [
  {
    path: 'libros',
    component: LibreriaComponent,
  },
  {
    path: '',
    redirectTo: '/libros',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/libros'
  }
];