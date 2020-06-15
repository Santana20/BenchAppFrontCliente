import { Injectable } from '@angular/core';
import { Producto } from '../entidades/producto';
import { PedidoProducto } from '../entidades/pedido-producto';

@Injectable({
  providedIn: 'root'
})

//Servicio que nos ayuda a mantener los pedidosproductos en toda la pagina utilizando localstorage. 
export class CarritoService {
  
  constructor() {
  }

  //este metodo es para agregar los pedidosproductos al carrito. En si, lo que hace es "chancar" todo lo q habia antes con lo que viene. Mayormente se enviara como parametro el arreglo completo de pedidiosproductos, que se convertira en formato JSON string creo.
  addPedidoProductoToCarrito( detallepedido : any )
  {
    localStorage.setItem("carrito", JSON.stringify(detallepedido));
  }

  //Retorna el carrito el formato JSON.
  getDetallePedido()
  {
    return JSON.parse(localStorage.getItem("carrito"));
  }

  removeAllCarrito()
  {
    return localStorage.removeItem("carrito");
  }
}
