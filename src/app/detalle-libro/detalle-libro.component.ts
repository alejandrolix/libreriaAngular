import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Libro } from '../interfaces/libro';
import { LibrosService } from '../servicios/libros.service';

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.scss']
})
export class DetalleLibroComponent implements OnInit {
  libro: Libro;

  constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService) { }

  ngOnInit(): void {
    this.libro = null;
    let codLibro = this.activatedRoute.snapshot.paramMap.get('cod');

    this.librosService.obtenerLibro(codLibro).subscribe(libro => {
      this.libro = libro[0];
      console.log(this.libro);
    },error => alert('Ha habido un error al obtener el libro: ' + error.error.mensaje));
  }
}
