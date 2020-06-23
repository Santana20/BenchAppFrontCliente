import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../entidades/producto';
import { ProductoService } from '../servicios/producto.service';
import { ProductoOferta } from '../entidades/producto-oferta';
import { Oferta } from '../entidades/oferta';
import { OfertaService } from '../servicios/oferta.service';
import { ProductoOfertaService } from '../servicios/producto-oferta.service';
import { PedidoProducto } from '../entidades/pedido-producto';
import { CarritoService } from '../servicios/carrito.service';
import { CarritoOfertaService } from '../servicios/carrito-oferta.service';
import { Review } from '../entidades/review';
import { ReviewService } from '../servicios/review.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  producto:Observable<Producto>;
  productoOferta:Observable<ProductoOferta>;
  ofertas:Observable<Oferta>;
  review:Observable<Review>;
  //arreglo para el carrito
  cart : PedidoProducto[];
  //arreglo para el carritoOferta
  cartOferta : ProductoOferta[];


  //inyectamos el carritoservicio
  constructor(private productoService:ProductoService,private ofertaService:OfertaService, private reviewService:ReviewService
    ,private productoOfertaService:ProductoOfertaService, private carritoservice : CarritoService, private carritoOfertaservice : CarritoOfertaService) 
    {
      this.cart = this.carritoservice.getDetallePedido();
      this.cartOferta = this.carritoOfertaservice.getDetalleCarritoOferta();
    }

  ngOnInit(): void {
    this.reloadData();
    this.reloadData2();
    this.reloadData3();
  }
  reloadData()
  {
    console.log("cargando listar!");
    this.productoService.getProductList().subscribe(producto=>this.producto=producto);
  }
  reloadData2(){
    console.log("cargando promociones!")
    this.productoOfertaService.getListaProductoOferta().subscribe(productoOferta=>this.productoOferta=productoOferta);
    this.productoService.getProductList().subscribe(producto=>this.producto=producto);
    this.ofertaService.getOgertaLista().subscribe(ofertas=>this.ofertas=ofertas);
  }
  reloadData3()
  {
    console.log("cargando listar!");
    this.reviewService.getReviews().subscribe(review=>this.review=review);
  }


  agregaralcarrito(prod : Producto)
  {
    //si el carrito esta vacio
    if (this.cart == null) 
    {
      this.cart = [];
      this.cart.push(new PedidoProducto(prod.precio, 1, prod));
      this.carritoservice.addPedidoProductoToCarrito(this.cart);
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

  agregaralcarritoOferta(ofertaproducto : ProductoOferta)
  {
    console.log("llegue a la funcion agregaralcarritoOferta");
    //si el carritoOferta esta vacio
    if (this.cartOferta == null) 
    {
      this.cartOferta = [];
      this.cartOferta.push(new ProductoOferta(ofertaproducto.descuento, ofertaproducto.total, ofertaproducto.producto, ofertaproducto.oferta));
      
    }
    else 
    {
      let tempPP = this.cartOferta.find(p => p.producto.codigo == ofertaproducto.producto.codigo);
      if (tempPP == null)
      {
        this.cartOferta.push(new ProductoOferta(ofertaproducto.descuento, ofertaproducto.total, ofertaproducto.producto, ofertaproducto.oferta));
      }

      else 
      {
        tempPP.descuento += ofertaproducto.descuento;
        tempPP.total += ofertaproducto.total;
      }
    }
    this.carritoOfertaservice.addPedidoOfertaToCarrito(this.cartOferta);
    console.log("todo termino sin problemas");
  }
}
