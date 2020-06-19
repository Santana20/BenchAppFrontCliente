import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { MessageServiceService } from 'src/app/servicios/message-service.service';

@Component({
  selector: 'app-pantalla-producto',
  templateUrl: './pantalla-producto.component.html',
  styleUrls: ['./pantalla-producto.component.css']
})
export class PantallaProductoComponent implements OnInit {
  producto:Observable<Producto>;
  // variable para buscar productos
  buscar:string;
  @Input('entrada') entrada="default";
  mensaje:string;
  numero:string="piz"
  //arreglo para el carrito
  cart : PedidoProducto[];

  //se agrega al servicio del carrito
  constructor(private servicioComunicacion:MessageServiceService,private router:Router,private productoService:ProductoService, private carritoservice : CarritoService) 
  {
    this.cart = this.carritoservice.getDetallePedido();
  }
  cambioTexto(mensaje:string){
    this.servicioComunicacion.enviarMensaje(mensaje);
  }

  ngOnInit(): void {
    
    this.servicioComunicacion.enviarMensajeObservable.subscribe(mensaje=>{
      this.mensaje=mensaje;
      this.procesarClick()
    });
    
    this.reloadData();
    
    
  }
  listarProducto()
  {
    this.router.navigate(['/listarProducto'])
  }
  reloadData()
  {
    console.log("cargando listar!");
    this.productoService.getProductList().subscribe(producto=>this.producto=producto);
  }

  agregaralcarrito(prod : Producto)
  {
    //si el carrito esta vacio
    if (this.cart == null) 
    {
      this.cart = [];
      this.cart.push(new PedidoProducto(prod.precio, 1, prod));
    }
    else
    {
      let tempPP = this.cart.find(p => p.producto.codigo == prod.codigo);
      if (tempPP == null)
      {
        this.cart.push(new PedidoProducto(prod.precio, 1, prod));
      }

      else 
      {
        tempPP.cantidad_pedida++;
        tempPP.precio += tempPP.producto.precio;
      }
    }

    //actualzaimos el localstorage
    this.carritoservice.addPedidoProductoToCarrito(this.cart);
    
    //imprimimos ´para la confirmacion
    console.log("se agrego al carrito correctamente");
  }

  procesarClick(){
    this.productoService.getProductSearchNombre(this.mensaje).subscribe(producto=>this.producto=producto);
  }

  
}
