import { ImagenLibro } from './imagen-libro';

export interface Libro {
    cod: string;
    isbn: string;
    titulo: string;
    precio: number;
    imagen: ImagenLibro;
    autor: string;
    activo: boolean;
    puntuacion: number;
}
