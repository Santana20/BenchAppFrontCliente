import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from 'src/app/entidades/pedido';
import { Usuario } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { PedidoProducto } from 'src/app/entidades/pedido-producto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/servicio-auth/auth.service';

@Component({
  selector: 'app-listar-pedido',
  templateUrl: './listar-pedido.component.html',
  styleUrls: ['./listar-pedido.component.css']
})
export class ListarPedidoComponent implements OnInit {
  
  
  //variables
  username : string;
  listaPedidosSinRecepcion : Observable<Pedido>;
  listaPedidoAntiguo : Observable<Pedido>

  constructor(private clienteService:ClienteService,private pedidoService:PedidoService, private router: Router, private authService: AuthService) 
  {
    console.log(this.authService.getUsuario());
    console.log(this.authService.getUsuario().id);
    this.username = this.authService.getUsuario().username;
    console.log(this.username);
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("reload!");
    this.pedidoService.listarPedidosActivosdeCliente(this.username).subscribe(pedido => this.listaPedidosSinRecepcion=pedido);

    this.pedidoService.listarPedidosPasadosdeCliente(this.username).subscribe(
      pedido => this.listaPedidoAntiguo = pedido);
  }

  actualizarFechaRecibido(codigoPedido : number) : void
  {
    let fecha_actual = new Date();
    
    this.pedidoService.ActualizarFechaRecepciondelPedido(fecha_actual, codigoPedido).subscribe(
      //pedido => this.router.navigate(["/listarPedido"])
    );
    console.log("llegue a mandar el rest");
    //this.router.navigate['listarPedido']; 
  }
}
