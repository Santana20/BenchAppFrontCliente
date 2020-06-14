export class Producto {
    codigo:number;
    nombre:string;
    descripcion:string;
    precio:number;

    constructor(id, descripcion, name, precio)
    {
        this.codigo = id;
        this.nombre = name;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
