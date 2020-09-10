import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaAutores } from '../interfaces/respuesta-autores';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Autor } from '../interfaces/autor';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private url;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/autores';
  }

  obtenerAutores(): Observable<Autor[]> {
    let observable = this.http.get<RespuestaAutores>(this.url).pipe(
      map(respuesta => {

        if (respuesta.ok) {
          return respuesta.data;
        }
      })
    );

    return observable;
  }
}
