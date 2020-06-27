import { Usuario } from './cliente';
import { PedidoProducto } from './pedido-producto';
import { Observable } from 'rxjs';


export class Pedido {
    codigo:number;
    direccion:string;
    fecha_pedido:Date;
    fecha_recepcion:Date;
    status:boolean;
    costo_total:number;
    cliente:Usuario;
    productos: PedidoProducto[]
}
