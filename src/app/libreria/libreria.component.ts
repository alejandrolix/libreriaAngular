import { Component, OnInit } from '@angular/core';
import {Libro} from '../interfaces/libro';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent implements OnInit {
  copiaLibros: Libro[];
  libros: Libro[];
  textoBusqueda: string;

  constructor() { }

  ngOnInit(): void {
    this.copiaLibros = [
      {
        cod: '1',
        titulo: 'libro 1',
        precio: 45,
        imagen: null,
        autor: 'Perez Reverte',
        activo: true
      },
      {
        cod: '2',
        titulo: 'libro 2',
        precio: 50,
        imagen: null,
        autor: 'Miguel de Cervantes',
        activo: false
      }
    ];
    this.textoBusqueda = null;    

    this.mostrarTodosLibros();    // Mostramos todos los libros para que podamos seleccionar si queremos filtrar por si están activos o no, o por
                                  // título o autor.        
  }

  mostrarLibrosActivos() {
    this.libros = this.filtrarLibros('activos');
  }

  mostrarLibrosNoActivos() {
    this.libros = this.filtrarLibros('');
  }

  filtrarLibros(tipoFiltro: string): Libro[] {
    let librosFiltrados: Libro[] = [];

    if (tipoFiltro === 'activos') {
      this.copiaLibros.forEach(libro => {
        if (libro.activo) {
          librosFiltrados.push(libro);
        }
      });
    }
    else {
      this.copiaLibros.forEach(libro => {
        if (!libro.activo) {
          librosFiltrados.push(libro);
        }
      });
    }
    
    return librosFiltrados;
  }

  mostrarTodosLibros() {
    this.libros = this.copiaLibros;
  }
}
