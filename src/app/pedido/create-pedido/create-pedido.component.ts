import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { CarritoOfertaService } from 'src/app/servicios/carrito-oferta.service';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {
  pedido:Pedido;
  fdni:String;

  //pedidoProducto:PedidoProducto=new PedidoProducto();
  fpedido:number;
  productos:Observable<Producto>;

  //*****variables********//
  listaOfertaProductos : ProductoOferta[];
  listaPedidosProductos: PedidoProducto[];
  costoTotal:number;

  constructor(private productoService:ProductoService,private pedidoService:PedidoService,private router:Router, private carritoservice: CarritoService, private carritoOfertaservice: CarritoOfertaService) 
  { 
    this.costoTotal = 0;
    this.pedido = new Pedido();
  }

  ngOnInit(): void {
    //Recibimos el arreglo del carrito
    this.listaPedidosProductos = this.carritoservice.getDetallePedido();
    //Recibimos el arreglo del carritoOferta
    this.listaOfertaProductos = this.carritoOfertaservice.getDetalleCarritoOferta();
    //calculamos la suma total del carrito
    for (let i in this.listaPedidosProductos) {
      this.costoTotal = this.costoTotal + this.listaPedidosProductos[i].precio;
    }

    for (let i in this.listaOfertaProductos) {
      this.costoTotal = this.costoTotal + this.listaOfertaProductos[i].total;
    }
  }

  //metodo que guarda el pedido en base de datos junto con todos sus pedidosProductos.
  save(form : NgForm){
    this.listaPOTolistaPP();
    //pasamos los objetos pedidosproductos al arreglo productos del objeto pedido.
    this.pedido.productos = this.listaPedidosProductos;
    //actualizamos el costo toal del pedido por la suma de subtotal del arreglo listaPedidosProductos.
    this.pedido.costo_total = this.costoTotal;
  
    this.pedido.fecha_pedido = new Date();
    this.pedido.status = false;
    console.log(this.pedido.fecha_pedido);
    

    //eliminamos el item "carrito" del localstorage, es decir, se limpia los pedidosproductos que habian.
    this.carritoservice.removeAllCarrito();

    this.carritoOfertaservice.removeAllCarritoOferta();


    console.log(this.pedido.fecha_pedido);

    this.pedidoService.CreatePedido(this.pedido,this.fdni).subscribe(
     
    );
    
    form.resetForm();
    
    
    //actualizamos los objetos del arreglo carrito, para que este vacio
    this.listaPedidosProductos = this.carritoservice.getDetallePedido();
    //actualizamos los objetos del arreglo carrito, para que este vacio
    this.listaOfertaProductos = this.carritoOfertaservice.getDetalleCarritoOferta();
    //actualizamos el costototal a cero por si acaso.
    this.costoTotal = 0;
  }

  listaPOTolistaPP()
  {
    if( this.listaOfertaProductos != null && this.listaOfertaProductos.length > 0 )
    {
      for (let i in this.listaOfertaProductos) 
      {
        let PO = this.listaOfertaProductos[i];
        if( this.listaPedidosProductos == null )
        {
          this.listaPedidosProductos = [];
          this.listaPedidosProductos.push(new PedidoProducto(PO.total, Math.round((PO.total + PO.descuento ) / PO.producto.precio), PO.producto));
        }

        else
        {
          let tempPP = this.listaPedidosProductos.find(p => p.producto.codigo == PO.producto.codigo);

          if ( tempPP == null )
          {
            this.listaPedidosProductos.push(new PedidoProducto(PO.total, Math.round((PO.total + PO.descuento ) / PO.producto.precio), PO.producto));
          }

          else
          {
            tempPP.cantidad_pedida += Math.round(( PO.total + PO.descuento )/PO.producto.precio);
            
            tempPP.precio += PO.total;
          }
        }
      }
    }
  }

  //metodos que no se usaran, quiza los borremos o no.
  /*
  savePP(form : NgForm){
    console.log(this.pedidoProducto);
    //this.pedidoService.createPedidoProducto(this.fpedido,this.pedidoProducto).subscribe(data =>this.router.navigate([]));
    this.pedidoProducto.precio = this.pedidoProducto.producto.precio * this.pedidoProducto.cantidad_pedida;
    this.costoTotal = this.costoTotal + this.pedidoProducto.precio;

    this.listaPedidosProductos.push(this.pedidoProducto);
    this.pedidoProducto = new PedidoProducto();
    form.resetForm();
  }*/

  cargando(){
    console.log("cargando productos")
    this.productoService.getProductList().subscribe(productos=>this.productos=productos);
    console.log(this.productos);
  }

  compararProducto(p1:Producto,p2:Producto):boolean{
    if(p1==undefined && p2==undefined){
      return true;
    }
    return p1===null || p2===null || p1===undefined || p2===undefined? false:p1.codigo === p2.codigo
  }

}
