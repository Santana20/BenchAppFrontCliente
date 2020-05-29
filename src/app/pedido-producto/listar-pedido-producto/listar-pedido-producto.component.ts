import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { PedidoService } from 'src/app/servicios/pedido.service';

@Component({
  selector: 'app-listar-pedido-producto',
  templateUrl: './listar-pedido-producto.component.html',
  styleUrls: ['./listar-pedido-producto.component.css']
})
export class ListarPedidoProductoComponent implements OnInit {
  pedidoProducto:Observable<PedidoProducto>
  productos:Observable<Producto>
  
  constructor(private productoService:ProductoService,private pedidoProductoService:PedidoService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("reload!")
    this.pedidoProductoService.getPedidoProducto().subscribe(pedidoProducto=>this.pedidoProducto=pedidoProducto);
    this.productoService.getProductList().subscribe(productos=>this.productos=productos);
  }

}
