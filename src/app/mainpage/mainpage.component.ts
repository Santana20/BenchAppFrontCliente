import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../entidades/producto';
import { ProductoService } from '../servicios/producto.service';
import { ProductoOferta } from '../entidades/producto-oferta';
import { Oferta } from '../entidades/oferta';
import { OfertaService } from '../servicios/oferta.service';
import { ProductoOfertaService } from '../servicios/producto-oferta.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  producto:Observable<Producto>;
  productoOferta:Observable<ProductoOferta>
  ofertas:Observable<Oferta>
  constructor(private productoService:ProductoService,private ofertaService:OfertaService
    ,private productoOfertaService:ProductoOfertaService) { }

  ngOnInit(): void {
    this.reloadData();
    this.reloadData2();
  }
  reloadData()
  {
    console.log("cargando listar!");
    this.productoService.getProductList().subscribe(producto=>this.producto=producto);
  }
  reloadData2(){
    console.log("cargando promociones!")
    this.productoOfertaService.getListaProductoOferta().subscribe(productoOferta=>this.productoOferta=productoOferta);
    this.productoService.getProductList().subscribe(producto=>this.producto=producto);
    this.ofertaService.getOgertaLista().subscribe(ofertas=>this.ofertas=ofertas);
  }
}
