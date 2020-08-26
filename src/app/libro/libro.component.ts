import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Libro } from '../interfaces/libro';
import {LibrosService} from '../servicios/libros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {
  @Input() libro: Libro;
  @Output() actualizarLibreria: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
  }

  eliminar() {
    Swal.fire({
      title: '¿Está seguro que desea eliminar el libro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    })
      .then(result => {

      if (result.value) {
        this.librosService.eliminarLibro(this.libro.cod).subscribe(respuesta => {
            if (respuesta.ok) {
              Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
              this.actualizarLibreria.emit(true);
            }
            else {
              alert('Ha habido un error al eliminar el libro: ' + respuesta.mensaje);
            }
          },
          error => alert('Ha habido un error al eliminar el libro: ' + error.error.mensaje));
      }
    });
  }
}
