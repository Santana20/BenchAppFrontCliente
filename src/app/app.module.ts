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
    ListarProductoOfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
