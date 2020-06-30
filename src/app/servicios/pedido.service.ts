import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pedido } from '../entidades/pedido';
import { PedidoProducto } from '../entidades/pedido-producto';
import { AuthService } from './servicio-auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  private isNoAutorizado(e): boolean {
    if (e.status == 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
    }

    if (e.status == 403) {
      this.router.navigate(['']);
      return true;
    }
    return false;
  }

  CreatePedido(pedido:Object,username:String):Observable<Object>{
    return this.http.post(this.urlBase+"/pedido/"+username,pedido,{ headers: this.authService.agregarAuthorizationHeader(this.httpHeaders) });
  }

  ActualizarFechaRecepciondelPedido(fechaRecepcion:Date, codigo:number):Observable<Object>
  {
    return this.http.put(this.urlBase + "/actualizarPedido/" + codigo, fechaRecepcion, { headers: this.authService.agregarAuthorizationHeader(this.httpHeaders) });
  }

  listarPedidosActivosdeCliente( username : string ) : Observable<any>
  {
    console.log("llamando a rest");
    return this.http.get(this.urlBase + "/listarPedidosActivosdeCliente/" + username,
    {headers : this.authService.agregarAuthorizationHeader(this.httpHeaders)}).pipe(
      map(response => response as Pedido[])
    );
  }

  listarPedidosPasadosdeCliente( username : string ) : Observable<any>
  {
    console.log("llamando a rest");
    return this.http.get(this.urlBase + "/listarPedidosPasadosdeCliente/" + username,
    {headers : this.authService.agregarAuthorizationHeader(this.httpHeaders)}).pipe(
      map(response => response as Pedido[])
    );
  }

  createPedidoProducto(fpedido:number,pedidoProducto:Object):Observable<any>{
    
    return this.http.post(this.urlBase+"/RegistrarPP/"+fpedido,pedidoProducto,{headers:this.httpHeaders})
  }


  getPedidosLista():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+'/pedidos');
    return this.http.get(this.urlBase+'/pedidos').pipe(
      map(response=>response as Pedido[])
    );
  }

  getPedidoProducto():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+'/pedidosProductos');
    return this.http.get(this.urlBase+'/pedidosProductos').pipe(
      map(response=>response as PedidoProducto[])
    );
  }

  getDetallePedido(fcodigo):Observable<any>{
    console.log("llamando a rest :"+this.urlBase+'/otenerPedidoProducto/'+fcodigo);
    return this.http.get(this.urlBase+'/otenerPedidoProducto/'+fcodigo).pipe(
      map(response=>response as PedidoProducto[])
    )
  }

 
}
