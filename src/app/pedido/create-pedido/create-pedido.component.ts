import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/entidades/pedido';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-pedido',
  templateUrl: './create-pedido.component.html',
  styleUrls: ['./create-pedido.component.css']
})
export class CreatePedidoComponent implements OnInit {
  pedido:Pedido=new Pedido();
  fdni:String;

  pedidoProducto:PedidoProducto=new PedidoProducto();
  fpedido:number;
  productos:Observable<Producto>;

  //*****variables********//
  listaPedidosProductos: Array<PedidoProducto>;
  costoTotal:number;

  constructor(private productoService:ProductoService,private pedidoService:PedidoService,private router:Router) 
  { 
    this.costoTotal = 0;
    this.listaPedidosProductos = new Array<PedidoProducto>();
  }

  ngOnInit(): void {
    this.cargando();
  }

  save(form : NgForm){
    this.pedido.productos = this.listaPedidosProductos;
    this.pedido.costo_total = this.costoTotal;
    console.log(this.pedido);
    
    this.pedidoService.CreatePedido(this.pedido,this.fdni).subscribe(
     
    );
    
    form.resetForm();
    this.listaPedidosProductos = new Array<PedidoProducto>(); 
    this.costoTotal = 0;
  }

  savePP(form : NgForm){
    console.log(this.pedidoProducto);
    //this.pedidoService.createPedidoProducto(this.fpedido,this.pedidoProducto).subscribe(data =>this.router.navigate([]));
    this.pedidoProducto.precio = this.pedidoProducto.producto.precio * this.pedidoProducto.cantidad_pedida;
    this.costoTotal = this.costoTotal + this.pedidoProducto.precio;

    this.listaPedidosProductos.push(this.pedidoProducto);
    this.pedidoProducto = new PedidoProducto();
    form.resetForm();
  }

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
