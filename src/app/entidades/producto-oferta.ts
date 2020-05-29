import { Producto } from './producto';
import { Oferta } from './oferta';

export class ProductoOferta {
    codigo:number;
    fecha_inicio:Date;
    fecha_fin:Date;
    descuento:number;
    total:number;
    producto:Producto
    oferta:Oferta
}
