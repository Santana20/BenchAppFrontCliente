import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { CreatePedidoComponent } from './pedido/create-pedido/create-pedido.component';
import { ListarPedidoComponent } from './pedido/listar-pedido/listar-pedido.component';
import { CreatePedidoProductoComponent } from './pedido-producto/create-pedido-producto/create-pedido-producto.component';
import { ListarPedidoProductoComponent } from './pedido-producto/listar-pedido-producto/listar-pedido-producto.component';
import { CreateProductoComponent } from './producto/create-producto/create-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';

import { HttpClientModule } from '@angular/common/http';

import {FormsModule}  from '@angular/forms';
import { ListarProductoOfertaComponent } from './producto-oferta/listar-producto-oferta/listar-producto-oferta.component';
import { PantallaClienteComponent } from './cliente/pantalla-cliente/pantalla-cliente.component';
import { PantallaPedidoComponent } from './pedido/pantalla-pedido/pantalla-pedido.component';
import { PantallaProductoComponent } from './producto/pantalla-producto/pantalla-producto.component';
import { PantallaOfertaComponent } from './producto-oferta/pantalla-oferta/pantalla-oferta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//add Paginator hand Angular v9.0
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgregaracarritoComponent } from './producto/agregaracarrito/agregaracarrito.component';
import { ActualizarcarritoComponent } from './pedido/actualizarcarrito/actualizarcarrito.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ReviewComponent } from './review/review.component';
import { AboutComponent } from './about/about.component';
//end add paginator



@NgModule({
  declarations: [
    AppComponent,
    CreateClienteComponent,
    CreatePedidoComponent,
    ListarPedidoComponent,
    CreatePedidoProductoComponent,
    ListarPedidoProductoComponent,
    CreateProductoComponent,
    ListarProductoComponent,
    ListarProductoOfertaComponent,
    PantallaClienteComponent,
    PantallaPedidoComponent,
    PantallaProductoComponent,
    PantallaOfertaComponent,
    AgregaracarritoComponent,
    ActualizarcarritoComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    ReviewComponent,
    AboutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, // Paginator add hand
    MatIconModule, // Paginator add hand
    MatSortModule, // Paginator add hand
    MatTableModule, // Paginator add hand
    MatTooltipModule, // Paginator add hand
    MatPaginatorModule, NgbModule // Paginator add hand
    
  ],
  //partes necesarias para el ventana emergente, le decimos hasta donde puede llegar nuestrso componentes
  entryComponents:[CreateClienteComponent],
  exports:[CreateClienteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
