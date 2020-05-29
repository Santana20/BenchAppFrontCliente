import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/entidades/pedido';
import { Cliente } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  pedidos:Observable<Pedido>
  clientes:Observable<Cliente>
  fcodigo:number

  pedidoProducto:Observable<PedidoProducto>
  constructor(private clienteService:ClienteService,private pedidoService:PedidoService) { }

  ngOnInit(): void {
    this.reloadData();

  }

  reloadData(){
    console.log("reload!");
    this.pedidoService.getPedidosLista().subscribe(pedidos=>this.pedidos=pedidos);
    this.clienteService.getClienteLista().subscribe(clientes=>this.clientes=clientes);
    
    
  }

  getDetallePedidoProducto(){
    this.pedidoService.getDetallePedido(this.fcodigo).subscribe(pedidoProducto=>this.pedidoProducto=pedidoProducto);
  }

  

}
