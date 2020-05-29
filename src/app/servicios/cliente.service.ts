import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Cliente } from '../entidades/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http: HttpClient) { }

  createCliente(cliente:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/cliente', cliente, {headers:this.httpHeaders});//enviando el product a REST
  }


  getClienteLista():Observable<any>{
    console.log("llamando a rest:"+this.urlBase+'/clientes');
    return this.http.get(this.urlBase+'/clientes').pipe(
      map(response=>response as Cliente[])
    );
  }
}
