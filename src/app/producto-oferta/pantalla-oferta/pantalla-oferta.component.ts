import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Producto } from 'src/app/entidades/producto';
import { Oferta } from 'src/app/entidades/oferta';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoService } from 'src/app/servicios/producto.service';
import { OfertaService } from 'src/app/servicios/oferta.service';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-pantalla-oferta',
  templateUrl: './pantalla-oferta.component.html',
  styleUrls: ['./pantalla-oferta.component.css']
})
export class PantallaOfertaComponent implements OnInit {
  productoOferta:Observable<ProductoOferta>;
  productos:Observable<Producto>;
  ofertas:Observable<Oferta>;

  //arreglo para el carrito
  cart : PedidoProducto[];

  //se agrega al servicio del carrito
  constructor(private router:Router,private productoOfertaService:ProductoOfertaService,
    private productoService:ProductoService,private ofertaService:OfertaService, private carritoservice : CarritoService)
    {
      this.cart = this.carritoservice.getDetallePedido();
    }

  ngOnInit(): void {
    this.reloadData();
  }
  listarPromo()
  {
    this.router.navigate(['/listarPromo']);
  }
  reloadData(){
    console.log("cargando promociones!")
    this.productoOfertaService.getListaProductoOferta().subscribe(productoOferta=>this.productoOferta=productoOferta);
    this.productoService.getProductList().subscribe(productos=>this.productos=productos);
    this.ofertaService.getOgertaLista().subscribe(ofertas=>this.ofertas=ofertas);
  }

  agregaralcarritoOferta(oferta : ProductoOferta)
  {
    console.log("llegue a la funcion agregaralcarritoOferta");
    //si el carrito esta vacio
    if (this.cart == null) 
    {
      this.cart = [];
      this.cart.push(new PedidoProducto(oferta.total, Math.round(( oferta.total + oferta.descuento )/oferta.producto.precio), oferta.producto));
      
    }

    else 
    {
      let tempPP = this.cart.find(p => p.producto.codigo == oferta.producto.codigo);
      if (tempPP == null)
      {
        this.cart.push(new PedidoProducto(oferta.total, Math.round(( oferta.total + oferta.descuento )/oferta.producto.precio), oferta.producto));
      }

      else 
      {
        tempPP.cantidad_pedida += Math.round(( oferta.total + oferta.descuento )/oferta.producto.precio);
        tempPP.precio += oferta.total;
      }
    }
    this.carritoservice.addPedidoProductoToCarrito(this.cart);
    console.log("todo termino sin problemas");
  }
}
