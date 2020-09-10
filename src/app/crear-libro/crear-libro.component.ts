import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Autor} from '../interfaces/autor';
import {AutoresService} from '../servicios/autores.service';
import {LibrosService} from '../servicios/libros.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.scss']
})
export class CrearLibroComponent implements OnInit {
  formCrearLibro: FormGroup;
  autores: Autor[];

  constructor(private autoresService: AutoresService, private librosService: LibrosService) { }

  ngOnInit(): void {
    this.formCrearLibro = null;
    this.autores = null;

    this.autoresService.obtenerAutores().subscribe(autores => {
      this.autores = autores;
      this.formCrearLibro = new FormGroup({
        activo: new FormControl(false),
        cod: new FormControl(''),
        titulo: new FormControl('', Validators.required),
        autor: new FormControl(null),
        isbn: new FormControl('', Validators.required),
        precio: new FormControl('', Validators.required),
        url: new FormControl(''),
        imagen: new FormControl(null)
      });

      this.formCrearLibro.get('autor').setValue(this.autores[0].cod);
    }, error => alert('Ha habido un error al obtener los autores: ' + error.error.mensaje));
  }

  crearLibro(): void {
    if (this.formCrearLibro.valid) {
      this.librosService.crearLibro(this.formCrearLibro.value).subscribe(respuesta => {

        if (respuesta.ok) {
          Swal.fire('Libro creado correctamente', 'Se ha creado el libro', 'success');
        }
      }, error => alert('Ha habido un error al obtener los autores: ' + error.error.mensaje));
    }
  }
}
