import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  cliente:Cliente=new Cliente();
  constructor(private clienteService:ClienteService,private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.cliente);
    this.clienteService.createCliente(this.cliente).subscribe(
      data=>this.router.navigate([])
    );
  }

}
