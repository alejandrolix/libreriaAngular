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
      librosFiltrados = this.obtenerLibrosPorAutorOTitulo(libros, textoBusqueda);

      if (librosFiltrados.length == 0) {
        librosFiltrados = null;
      }
    }

    return librosFiltrados;
  }

  obtenerLibrosPorAutorOTitulo(libros: Libro[], textoBusqueda: string): Libro[] {
    let librosFiltrados: Libro[] = null;

    librosFiltrados = libros.filter(libro => {
      let autor = libro.autor.toLowerCase();
      let titulo = libro.titulo.toLowerCase();
      let estaTextoBusquedaEnAutor = false;
      let estaTextoBusquedaEnTitulo = false;

      if (autor.includes(textoBusqueda)) {
        estaTextoBusquedaEnAutor = true;
      }

      if (titulo.includes(textoBusqueda)) {
        estaTextoBusquedaEnTitulo = true;
      }

      return estaTextoBusquedaEnAutor || estaTextoBusquedaEnTitulo;
    });           

    return librosFiltrados;
  }
}
