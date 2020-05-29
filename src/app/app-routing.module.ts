import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPedidoComponent } from './pedido/listar-pedido/listar-pedido.component';
import { ListarPedidoProductoComponent } from './pedido-producto/listar-pedido-producto/listar-pedido-producto.component';
import { ListarProductoComponent } from './producto/listar-producto/listar-producto.component';
import { CreateClienteComponent } from './cliente/create-cliente/create-cliente.component';
import { CreatePedidoComponent } from './pedido/create-pedido/create-pedido.component';
import { ListarProductoOfertaComponent } from './producto-oferta/listar-producto-oferta/listar-producto-oferta.component';


const routes: Routes = [
  {path:'', redirectTo: 'customer', pathMatch:'full'},
  {path:'newcliente',component:CreateClienteComponent},
  {path:'newPedido',component:CreatePedidoComponent},
  {path:'listarPedido',component:ListarPedidoComponent},
  {path:'listarPedidoProducto',component:ListarPedidoProductoComponent},
  {path:'listarProducto',component:ListarProductoComponent},
  {path:'listarPromo',component:ListarProductoOfertaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
