import { Producto } from './producto';
import { Pedido } from './pedido';

export class PedidoProducto {
    codigo:number;
    precio:number;
    cantidad_pedida:number;
    producto:Producto;

    constructor(precio, cantidad, prod : Producto)
    {
        this.precio = precio;
        this.cantidad_pedida = cantidad;
        this.producto = prod;
    }
}
