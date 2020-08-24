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
  nombreCampoOrdenar: string;

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.obtenerLibros().subscribe(libros => {
      this.copiaLibros = libros

      this.textoBusqueda = null; 
      this.nombreCampoOrdenar = 'ninguno';

      this.mostrarTodosLibros();    // Mostramos todos los libros para que podamos seleccionar si queremos filtrar por si están activos o no, o por
                                    // título o autor.  
    },
    error => alert('Ha habido un error al obtener los libros: ' + error.error.mensaje));      
  }

  mostrarLibrosActivos() {
    this.librosService.obtenerLibrosActivos().subscribe(libros => {
      this.libros = libros;
    },
    error => alert('Ha habido un error al obtener los libros activos: ' + error.error.mensaje));
  }

  mostrarLibrosNoActivos() {
    this.librosService.obtenerLibrosNoActivos().subscribe(libros => {
      this.libros = libros;
    },
    error => alert('Ha habido un error al obtener los libros no activos: ' + error.error.mensaje));
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
    this.librosService.obtenerLibrosOrdenadosPor(this.nombreCampoOrdenar).subscribe(libros => {
      this.libros = libros
    },
    error => alert('Ha habido un error al obtener los libros ordenados por ' + this.nombreCampoOrdenar + ': ' + error.error.mensaje));   
  }
}
