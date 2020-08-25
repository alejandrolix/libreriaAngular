import { Component, OnInit } from '@angular/core';
import {Libro} from '../interfaces/libro';
import {LibrosService} from '../servicios/libros.service';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent implements OnInit {
  libros: Libro[];
  textoBusqueda: string;
  nombreCampoOrdenar: string;

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libros = [];

    this.librosService.obtenerLibros().subscribe(libros => {
      this.libros = libros;

      this.textoBusqueda = null; 
      this.nombreCampoOrdenar = 'ninguno';
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

  mostrarTodosLibros() {
    this.librosService.obtenerLibros().subscribe(libros => {
      this.libros = libros;
    },
    error => alert('Ha habido un error al obtener los libros: ' + error.error.mensaje));
  }

  cambiarOrdenacionLibros() {
    this.librosService.obtenerLibrosOrdenadosPor(this.nombreCampoOrdenar).subscribe(libros => {
      this.libros = libros
    },
    error => alert('Ha habido un error al obtener los libros ordenados por ' + this.nombreCampoOrdenar + ': ' + error.error.mensaje));   
  }
}
