import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-cliente',
  templateUrl: './pantalla-cliente.component.html',
  styleUrls: ['./pantalla-cliente.component.css']
})
export class PantallaClienteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  BotonCrearCliente()
  {
    this.router.navigate(['/newcliente']);
  }

}
