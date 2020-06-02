import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-pedido',
  templateUrl: './pantalla-pedido.component.html',
  styleUrls: ['./pantalla-pedido.component.css']
})
export class PantallaPedidoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  crearPedido()
  {
    this.router.navigate(['/newPedido']);
  }
  listarPedido()
  {
    this.router.navigate(['/listarPedido']);
  }
  listarPedido_producto()
  {
    this.router.navigate(['/listarPedidoProducto']);
  }

}
