import { Libro } from './libro';

export interface RespuestaLibros {
    ok: boolean,
    mensaje: string,
    data: Libro[]
}
