import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Pedido } from '../entidades/pedido';
import { PedidoProducto } from '../entidades/pedido-producto';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  CreatePedido(pedido:Object,dni:String):Observable<Object>{
    return this.http.post(this.urlBase+"/pedido/"+dni,pedido,{headers:this.httpHeaders})
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
