import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Producto } from '../entidades/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }
  getProductList():Observable<any>{
    console.log("llamando a rest:"+this.urlBase+'/mostrarProductos');
    return this.http.get(this.urlBase+'/mostrarProductos').pipe(
      map(response =>response as Producto[])
    );
  }

  getProductSearchNombre(nombre:string):Observable<any>{
    console.log("llamando a rest:"+this.urlBase+'/buscarNombreProducto/'+nombre);
    return this.http.get(this.urlBase+'/buscarNombreProducto/'+nombre).pipe(
      map(response =>response as Producto[])
    )
  }
}
