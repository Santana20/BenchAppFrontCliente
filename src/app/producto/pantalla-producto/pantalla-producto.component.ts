import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-producto',
  templateUrl: './pantalla-producto.component.html',
  styleUrls: ['./pantalla-producto.component.css']
})
export class PantallaProductoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  listarProducto()
  {
    this.router.navigate(['/listarProducto'])
  }
}
