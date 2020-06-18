import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//servicio que nos ayuda a mantener las ofertas seleccionadas en una especie de carrito utilizando localstorage.
export class CarritoOfertaService 
{

  constructor() { }

  addPedidoOfertaToCarrito(prodOfertas : any)
  {
    localStorage.setItem("carritoOferta", JSON.stringify(prodOfertas));
  }

  getDetalleCarritoOferta()
  {
    return JSON.parse(localStorage.getItem("carritoOferta"));
  }

  removeAllCarritoOferta()
  {
    return localStorage.removeItem("carritoOferta");
  }
}
