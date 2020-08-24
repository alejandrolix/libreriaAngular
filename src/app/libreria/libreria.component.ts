import { Component, OnInit } from '@angular/core';
import {Libro} from '../interfaces/libro';
import {LibrosService} from '../servicios/libros.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent implements OnInit {
  copiaLibros: Libro[];
  libros: Libro[];
  textoBusqueda: string;
  tipoOrdenacion: string;

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.copiaLibros = this.librosService.obtenerLibros();
    this.textoBusqueda = null; 
    this.tipoOrdenacion = 'ninguno';

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

  cambiarOrdenacionLibros() {
    switch (this.tipoOrdenacion) {
      case 'autor':
        this.libros = this.copiaLibros.sort((libro1: Libro, libro2: Libro) => {
          if (libro1.autor > libro2.autor) {
            return 1;
          }
          
          if (libro1.autor < libro2.autor) {
            return -1;
          }
          
          return 0;
        });

        break;

      case 'titulo':
        this.libros = this.copiaLibros.sort((libro1: Libro, libro2: Libro) => {
          if (libro1.titulo > libro2.titulo) {
            return 1;
          }

          if (libro1.titulo < libro2.titulo) {
            return -1;
          }
          
          return 0;
        });

        break;

      case 'precio':
        this.libros = this.copiaLibros.sort((libro1: Libro, libro2: Libro) => libro1.precio - libro2.precio);

        break;          
    }    
  }
}
