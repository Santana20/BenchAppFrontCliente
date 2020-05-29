import { Producto } from './producto';
import { Pedido } from './pedido';

export class PedidoProducto {
    codigo:number;
    precio:number;
    cantidad_pedida:number;
    producto:Producto;
    pedido:Pedido;
}
