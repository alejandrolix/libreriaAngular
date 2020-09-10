import { Autor } from './autor';

export interface RespuestaAutores {
  ok: boolean;
  mensaje: string;
  data: Autor[];
}
