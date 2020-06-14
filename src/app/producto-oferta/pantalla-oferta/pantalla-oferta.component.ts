import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductoOfertaService } from 'src/app/servicios/producto-oferta.service';
import { Producto } from 'src/app/entidades/producto';
import { Oferta } from 'src/app/entidades/oferta';
import { ProductoOferta } from 'src/app/entidades/producto-oferta';
import { ProductoService } from 'src/app/servicios/producto.service';
import { OfertaService } from 'src/app/servicios/oferta.service';

@Component({
  selector: 'app-pantalla-oferta',
  templateUrl: './pantalla-oferta.component.html',
  styleUrls: ['./pantalla-oferta.component.css']
})
export class PantallaOfertaComponent implements OnInit {
  productoOferta:Observable<ProductoOferta>;
  productos:Observable<Producto>;
  ofertas:Observable<Oferta>;
  constructor(private router:Router,private productoOfertaService:ProductoOfertaService,
    private productoService:ProductoService,private ofertaService:OfertaService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  listarPromo()
  {
    this.router.navigate(['/listarPromo']);
  }
  reloadData(){
    console.log("cargando promociones!")
    this.productoOfertaService.getListaProductoOferta().subscribe(productoOferta=>this.productoOferta=productoOferta);
    this.productoService.getProductList().subscribe(productos=>this.productos=productos);
    this.ofertaService.getOgertaLista().subscribe(ofertas=>this.ofertas=ofertas);
  }
}
