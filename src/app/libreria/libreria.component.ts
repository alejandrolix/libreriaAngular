import { Component, OnInit } from '@angular/core';
import {Libro} from '../interfaces/libro';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.scss']
})
export class LibreriaComponent implements OnInit {
  libros: Libro[];

  constructor() { }

  ngOnInit(): void {
    this.libros = [
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
  }
}
