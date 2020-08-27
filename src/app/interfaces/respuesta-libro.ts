import { Libro } from './libro';

export interface RespuestaLibro {
  ok: boolean;
  mensaje: string;
  data: Libro;
}
