import { Component, OnInit, Input } from '@angular/core';
import {LibrosService} from '../servicios/libros.service';
import {Libro} from '../interfaces/libro';

@Component({
  selector: 'app-puntuacion-libro',
  templateUrl: './puntuacion-libro.component.html',
  styleUrls: ['./puntuacion-libro.component.scss']
})
export class PuntuacionLibroComponent implements OnInit {
  @Input() libro: Libro;
  copiaPuntuacion: number;

  constructor(private librosService: LibrosService) { }

  restoreRating() {
    this.copiaPuntuacion = this.libro.puntuacion;
  }

  ngOnInit(): void {
    this.restoreRating();
  }

  cambiarPuntuacion(nuevaPuntuacion: number) {
    this.librosService.cambiarPuntuacion(this.libro.cod, nuevaPuntuacion).subscribe(respuesta => {
      if (respuesta.ok) {
        this.libro.puntuacion = this.copiaPuntuacion;
      }
      else {
        alert('Ha habido un error al cambiar la puntuación del libro: ' + respuesta.mensaje);
      }
    },error => alert('Ha habido un error al cambiar la puntuación del libro: ' + error.error.mensaje));
  }
}
