import { Injectable } from '@angular/core';
import { Producto } from '../entidades/producto';
import { PedidoProducto } from '../entidades/pedido-producto';

@Injectable({
  providedIn: 'root'
})

//Servicio que nos ayuda a mantener los pedidosproductos en toda la pagina utilizando localstorage. 
export class CarritoService {

  products: Producto[] = [
    new Producto(1, 'Product 1', 'Fanta',20),
    new Producto(2, 'Product 2', 'Sprite!',20),
    new Producto(3, 'Product 3', 'Concordia',21.5),
    new Producto(4, 'Product 4', 'Pepsi', 22.0),
    new Producto(5, 'Product 5', 'Bimbo', 23.0),
    new Producto(6, 'Product 6', 'Big Kola',24.5),
    new Producto(7, 'Product 7', 'Oro', 25.80),
    new Producto(8, 'Product 8', 'Soda', 18.45),
  ]

  listacarrito : PedidoProducto[] = [
    new PedidoProducto(40, 2, this.products[0]),
    new PedidoProducto(64.5, 3, this.products[2]),
    new PedidoProducto(18.45, 1, this.products[7])
  ]
  
  constructor() { 
    this.addPedidoProductoToCarrito(this.listacarrito);
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
