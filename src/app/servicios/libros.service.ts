import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RespuestaLibros } from './../interfaces/respuesta-libros';
import { map } from 'rxjs/operators';

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
}
