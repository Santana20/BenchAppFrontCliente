import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-pantalla-producto',
  templateUrl: './pantalla-producto.component.html',
  styleUrls: ['./pantalla-producto.component.css']
})
export class PantallaProductoComponent implements OnInit {
  producto:Observable<Producto>;
  constructor(private router:Router,private productoService:ProductoService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  listarProducto()
  {
    this.router.navigate(['/listarProducto'])
  }
  reloadData()
  {
    console.log("cargando listar!");
    this.productoService.getProductList().subscribe(producto=>this.producto=producto);
  }
}
