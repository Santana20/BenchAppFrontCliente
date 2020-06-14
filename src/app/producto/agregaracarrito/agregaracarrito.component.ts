import { Component, OnInit } from '@angular/core';
import { PedidoProducto } from "../../entidades/pedido-producto";
import { MessageServiceService } from 'src/app/servicios/message-service.service';
import { CarritoService } from 'src/app/servicios/carrito.service';
@Component({
  selector: 'app-agregaracarrito',
  templateUrl: './agregaracarrito.component.html',
  styleUrls: ['./agregaracarrito.component.css']
})

//Componenete que nos ayudara a agregar pedidosproductos al carrito, no se vera en la pantalla
export class AgregaracarritoComponent implements OnInit {
  
  productAddedToCart: PedidoProducto[];
  allTotal: number;

  constructor(private messageService: MessageServiceService, private carritoservice : CarritoService) { }

  ngOnInit(): void 
  {
    
  }

}
