import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LibrosService} from '../servicios/libros.service';
import {ActivatedRoute} from '@angular/router';
import {Autor} from '../interfaces/autor';
import {AutoresService} from '../servicios/autores.service';
import {Libro} from '../interfaces/libro';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-libro',
  templateUrl: './editar-libro.component.html',
  styleUrls: ['./editar-libro.component.scss']
})
export class EditarLibroComponent implements OnInit {
  formEditarLibro: FormGroup;
  autores: Autor[];
  private codLibro: string;

  constructor(private route: ActivatedRoute, private librosService: LibrosService, private autoresService: AutoresService) {
  }

  ngOnInit(): void {
    this.formEditarLibro = null;
    this.autores = null;

    this.route.paramMap.subscribe(parametros => {
      this.codLibro = parametros.get('cod');

      this.librosService.obtenerLibro(this.codLibro).subscribe(libro => {
        let libroObtenido = libro[0];

        this.autoresService.obtenerAutores().subscribe(autores => {
          this.autores = autores;
          let codAutor: string = this.obtenerCodAutorLibro(this.autores, libroObtenido);

          this.formEditarLibro = new FormGroup({
            activo: new FormControl(libroObtenido.activo),
            codigo: new FormControl({
              value: libroObtenido.cod,
              disabled: true
            }),
            titulo: new FormControl(libroObtenido.titulo, Validators.required),
            autor: new FormControl(null),
            isbn: new FormControl(libroObtenido.isbn, Validators.required),
            precio: new FormControl(libroObtenido.precio, Validators.required),
            url: new FormControl(libroObtenido.url),
            imagen: new FormControl(null)
          });

          this.formEditarLibro.get('autor').setValue(codAutor);    // Establecemos como opción seleccionada el id del autor del libro.
        }, error => alert('Ha habido un error al obtener los autores: ' + error.error.mensaje));
      }, error => alert('Ha habido un error al obtener el libro: ' + error.error.mensaje));
    });
  }

  obtenerCodAutorLibro(autores: Autor[], libro: Libro): string {
    let idAutor: string = null;

    for (let i = 0; i < autores.length; i++) {
      if (autores[i].NOMBRE === libro.autor) {
        idAutor = autores[i].cod;
        break;
      }
    }

    return idAutor;
  }

  editarLibro(): void {
    if (this.formEditarLibro.valid) {
      this.librosService.editarLibro(this.codLibro, this.formEditarLibro.value).subscribe(respuesta => {

        if (respuesta.ok) {
          Swal.fire('Libro actualizado correctamente', 'Se ha actualizado el libro', 'success');
        }
      }, error => alert('Ha habido un error al editar el libro: ' + error.message));
    }
  }
}
