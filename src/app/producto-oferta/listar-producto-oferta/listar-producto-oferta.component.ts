import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Producto } from 'src/app/entidades/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Oferta } from 'src/app/entidades/oferta';
import { OfertaService } from 'src/app/servicios/oferta.service';

@Component({
  selector: 'app-listar-producto-oferta',
  templateUrl: './listar-producto-oferta.component.html',
  styleUrls: ['./listar-producto-oferta.component.css']
})
export class ListarProductoOfertaComponent implements OnInit {
  productoOferta:Observable<ProductoOferta>
  productos:Observable<Producto>
  ofertas:Observable<Oferta>
  constructor(private ofertaService:OfertaService,private productoService:ProductoService,private productoOfertaService:ProductoOfertaService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("cargando promociones!")
    this.productoOfertaService.getListaProductoOferta().subscribe(productoOferta=>this.productoOferta=productoOferta);
    this.productoService.getProductList().subscribe(productos=>this.productos=productos);
    this.ofertaService.getOgertaLista().subscribe(ofertas=>this.ofertas=ofertas);
  }

}
