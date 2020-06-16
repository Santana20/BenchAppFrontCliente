import { Producto } from './producto';
import { Pedido } from './pedido';

export class PedidoProducto {
    codigo:number;
    precio:number;
    cantidad_pedida:number;
    producto:Producto;

    constructor(precio=0, cantidad=0, prod : Producto = null)
    {
        this.precio = precio;
        this.cantidad_pedida = cantidad;
        this.producto = prod;
    }
}
