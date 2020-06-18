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

    constructor(descuento = 0, total = 0, prod : Producto = null, ofer : Oferta = null)
    {
        this.descuento = descuento;
        this.total = total;
        this.producto = prod;
        this.oferta = ofer;
    }
}
