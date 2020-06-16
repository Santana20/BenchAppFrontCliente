export class Producto {
    codigo:number;
    nombre:string;
    descripcion:string;
    precio:number;
    imagen:string;


    constructor(id, descripcion, name, precio,imagen)
    {
        this.codigo = id;
        this.nombre = name;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen=imagen;
    }
}
