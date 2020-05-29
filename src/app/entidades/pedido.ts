import { Cliente } from './cliente';

export class Pedido {
    codigo:number;
    direccion:string;
    fecha:Date;
    costo_total:number;
    cliente:Cliente;
}
