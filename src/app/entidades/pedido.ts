import { Cliente } from './cliente';
import { PedidoProducto } from './pedido-producto';
import { Observable } from 'rxjs';


export class Pedido {
    codigo:number;
    direccion:string;
    fecha:Date;
    costo_total:number;
    cliente:Cliente;
    productos: PedidoProducto[]
}
