import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos:Observable<Producto>
  constructor(private productoSevice:ProductoService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("reload!")
    this.productoSevice.getProductList().subscribe(productos=>this.productos=productos);
  }

}
