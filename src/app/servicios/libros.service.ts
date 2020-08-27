import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RespuestaLibros } from '../interfaces/respuesta-libros';
import { map } from 'rxjs/operators';
import { RespuestaLibroEliminado } from '../interfaces/respuesta-libro-eliminado';
import { RespuestaLibro } from '../interfaces/respuesta-libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/libros';
  }

  obtenerLibrosOrdenadosPor(nombreCampoOrdenar: string): Observable<Libro[]> {
    let url = this.url + '?ordenadoPor=' + nombreCampoOrdenar;

    let observable = this.http.get<RespuestaLibros>(url).pipe(
      map(respuesta => {

        if (respuesta.ok) {
          return respuesta.data;
        }
      })
    );

    return observable;
  }

  obtenerLibros(): Observable<Libro[]> {
    let observable = this.http.get<RespuestaLibros>(this.url).pipe(
      map(respuesta => {

        if (respuesta.ok) {
          return respuesta.data;
        }
      })
    );

    return observable;
  }

  obtenerLibrosActivos(): Observable<Libro[]> {
    let url = this.url + '/activos';

    let observable = this.http.get<RespuestaLibros>(url).pipe(
      map(respuesta => {

        if (respuesta.ok) {
          return respuesta.data;
        }
      })
    );

    return observable;
  }

  obtenerLibrosNoActivos(): Observable<Libro[]> {
    let url = this.url + '/noActivos';

    let observable = this.http.get<RespuestaLibros>(url).pipe(
      map(respuesta => {

        if (respuesta.ok) {
          return respuesta.data;
        }
      })
    );

    return observable;
  }

  obtenerLibro(cod: string): Observable<Libro> {
    let url = this.url + '/' + cod;

    let observable = this.http.get<RespuestaLibro>(url).pipe(
      map(respuesta => {

        if (respuesta.ok) {
          return respuesta.data;
        }
      })
    );

    return observable;
  }

  eliminarLibro(cod: string): Observable<RespuestaLibroEliminado> {
    let url = this.url + '/' + cod;
    let observable = this.http.delete<RespuestaLibroEliminado>(url);

    return observable;
  }

  cambiarPuntuacionLibro(cod: string, nuevaPuntuacion: number): Observable<RespuestaLibros> {
    let url = this.url + '/' + cod + '/puntuacion';
    let puntuacion = {
      puntuacion: nuevaPuntuacion
    };

    let observable = this.http.put<RespuestaLibros>(url, puntuacion);

    return observable;
  }
}
