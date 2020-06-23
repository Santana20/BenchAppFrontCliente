import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/entidades/pedido';
import { Cliente } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  
  
  //variables
  codigocliente : number;
  listaPedidosSinRecepcion : Observable<Pedido>;
  listaPedidoAntiguo : Observable<Pedido>

  constructor(private clienteService:ClienteService,private pedidoService:PedidoService, private router: Router) 
  {
    this.codigocliente = 1;
  }

  ngOnInit(): void {
    this.reloadData();

  }

  reloadData(){
    console.log("reload!");
    this.pedidoService.listarPedidosActivosdeCliente(this.codigocliente).subscribe(pedido => this.listaPedidosSinRecepcion=pedido);

    this.pedidoService.listarPedidosPasadosdeCliente(this.codigocliente).subscribe(
      pedido => this.listaPedidoAntiguo = pedido);
  }

  actualizarFechaRecibido(codigoPedido : number) : void
  {
    let fecha_actual = new Date();
    
    this.pedidoService.ActualizarFechaRecepciondelPedido(fecha_actual, codigoPedido).subscribe(
      
    );
    console.log("llegue a mandar el rest");
  }
}
