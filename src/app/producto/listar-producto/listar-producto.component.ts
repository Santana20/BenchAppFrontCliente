import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos:Observable<Producto>
  displayedColumns =["codigo", "nombre", "descripcion", "precio"];
  dataSource = new MatTableDataSource<Producto>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private productoSevice:ProductoService) { }

  ngOnInit(): void {
    this.reloadData();
    this.dataSource.paginator = this.paginator;
  }

  reloadData(){
    console.log("reload!")
    this.productoSevice.getProductList().subscribe(productos=>this.dataSource.data=productos);
  }

}
