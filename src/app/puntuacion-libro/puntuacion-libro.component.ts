import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-puntuacion-libro',
  templateUrl: './puntuacion-libro.component.html',
  styleUrls: ['./puntuacion-libro.component.scss']
})
export class PuntuacionLibroComponent implements OnInit {
  @Input() puntuacion: number;
  copiaPuntuacion: number;
  @Output() puntuacionCambiada: EventEmitter<number> = new EventEmitter();

  constructor() { }

  restoreRating() {
    this.copiaPuntuacion = this.puntuacion;
  }

  ngOnInit(): void {
    this.restoreRating();  
  }

  setRating() {
    this.puntuacionCambiada.emit(this.copiaPuntuacion);
  }
}
