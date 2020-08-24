import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RespuestaLibros } from './../interfaces/respuesta-libros';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }

  obtenerLibros(): Observable<Libro[]> {
    return this.http.get<RespuestaLibros>('http://localhost:8080/libros').pipe(
      map(respuesta => {
        if (respuesta.ok) {
          return respuesta.data;
        }
      }),
      catchError(error => throwError('error catchError: ' + error))
    );
  }
}
