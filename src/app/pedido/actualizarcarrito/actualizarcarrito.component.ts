import { Component, OnInit } from '@angular/core';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-actualizarcarrito',
  templateUrl: './actualizarcarrito.component.html',
  styleUrls: ['./actualizarcarrito.component.css']
})

//componente que sirve para editar el carrito antes de realizar pedido.
export class ActualizarcarritoComponent implements OnInit {

  //Variables
  //arreglo de pedidos-producto
  carrito : PedidoProducto[];
  //Total del carrito
  TotalCarrito : number;

  constructor(private carritoservice: CarritoService) 
  {
    this.TotalCarrito = 0;
  }

  ngOnInit(): void 
  {
    //Recibimos el arreglo del carrito
    this.carrito = this.carritoservice.getDetallePedido();

    //calculamos la suma total del carrito
    for (let i in this.carrito) {
      this.TotalCarrito = this.TotalCarrito + this.carrito[i].precio;
    }
  }

  //metodo que permite actualizar la cantidad de productos en un PedidoProducto que existe en el arreglo, recibe la pos. del objeto en el arreglo y la nueva cantidad.
  actualizarcantidad(index : number, newcantidad:number)
  {
    //if ( this.carrito[index].cantidad_pedida != newcantidad )
    //{
      console.log("llegue a entrar al if del metodo actualizarcantidad");
      //actualizamos la cantidad
      this.carrito[index].cantidad_pedida = newcantidad;
      
      //guardamos el anterior subtotal del objeto pedidioproducto antes de acutializarlo.
      let aux = this.carrito[index].precio;
      //actualizamos el precio (subtotal) del pedidioproducto
      this.carrito[index].precio = newcantidad * this.carrito[index].producto.precio;

      //actualizamos el localstorage
      this.carritoservice.addPedidoProductoToCarrito(this.carrito);

      //actualizamos el totalcarrito
      this.TotalCarrito += (this.carrito[index].precio - aux);
    //}
  }

  //metodo para eliminar objeto del carrito.
  eliminarPedidoProductodelCarrito(index: number)
  {
    //Antes de eliminar al objeto, acutailizamos el precio.
    this.TotalCarrito = this.TotalCarrito - this.carrito[index].precio;

    //eliminamos al objeto del arreglo, usando la funcion splice.
    this.carrito.splice(index, 1);
    //actualizamos el localstorage
    this.carritoservice.addPedidoProductoToCarrito(this.carrito);
  }

  //metodo para eliminar todos los objetos del carrito.
  eliminarTododelCarrito()
  {
    //eliminamos el item "carrito" del localstorage
    this.carritoservice.removeAllCarrito();
    //actualizamos los objetos del arreglo carrito, para que este vacio
    this.carrito = this.carritoservice.getDetallePedido();
    //actualizamos el totalcarrito a cero.
    this.TotalCarrito = 0;
  }
}
