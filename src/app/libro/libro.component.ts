import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../interfaces/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  @Input('libro') libro: Libro;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarPuntuacion(puntuacion: number) {
    // this.libro.puntuacion = puntuacion;
  }
}
