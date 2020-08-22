import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../interfaces/libro';

@Pipe({
  name: 'buscarTituloAutor'
})
export class BuscarTituloAutorPipe implements PipeTransform {

  transform(libros: Libro[], textoBusqueda: string): Libro[] {
    let librosFiltrados: Libro[] = null;

    if (textoBusqueda == null) {
      librosFiltrados = libros;
    }
    else {  
      librosFiltrados = this.filtrarLibrosPor(libros, 'autor', textoBusqueda);      

      if (librosFiltrados.length == 0) {    // No hay ningún libro con el autor introducido, buscamos por título.
        librosFiltrados = this.filtrarLibrosPor(libros, 'titulo', textoBusqueda);
      }
    }

    return librosFiltrados;
  }

  filtrarLibrosPor(libros: Libro[], campo: string, textoBusqueda: string): Libro[] {
    let librosFiltrados: Libro[] = null;

    if (campo === 'autor') {
      librosFiltrados = libros.filter(libro => {
        let autor = libro.autor.toLowerCase();
  
        return autor.includes(textoBusqueda);
      });    
    }
    else {
      librosFiltrados = libros.filter(libro => {
        let titulo = libro.titulo.toLowerCase();

        return titulo.includes(textoBusqueda);
      });
    }           

    return librosFiltrados;
  }
}
