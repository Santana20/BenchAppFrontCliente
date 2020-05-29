import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductoOferta } from '../entidades/producto-oferta';

@Injectable({
  providedIn: 'root'
})
export class ProductoOfertaService {
  private urlBase='http://localhost:8080/api';
  private httpHeaders=new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http:HttpClient) { }

  getListaProductoOferta():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/mostrarProductoOferta");
    return this.http.get(this.urlBase+"/mostrarProductoOferta").pipe(
     map(response =>response as ProductoOferta[])
    );
  }
}
