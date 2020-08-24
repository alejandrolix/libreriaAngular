import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor() { }

  obtenerLibros(): Libro[] {
    let libros: Libro[] = [
      {
        cod: '1',
        titulo: 'libro 1',
        precio: 45,
        imagen: null,
        autor: 'Perez Reverte',
        activo: true,
        puntuacion: 5
      },
      {
        cod: '2',
        titulo: 'libro 2',
        precio: 50,
        imagen: null,
        autor: 'Miguel de Cervantes',
        activo: false,
        puntuacion: 3
      }   
    ];

    return libros;
  }
}
