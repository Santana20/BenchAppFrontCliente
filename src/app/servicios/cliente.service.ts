import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Usuario } from '../entidades/cliente';
import { AuthService } from './servicio-auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlBase = 'http://localhost:8080/api';
  private credenciales = btoa('angularapp' + ':' + '12345');
  private httpHeaders = new HttpHeaders(
    {'Content-type' : 'application/json'});

  constructor(private http: HttpClient, private authService : AuthService) { }

  createCliente(cliente:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/RegistrarUsuario', cliente, { headers: this.authService.agregarAuthorizationHeader(this.httpHeaders) });
  }


  getClienteLista():Observable<any>{
    console.log("llamando a rest:"+this.urlBase+'/clientes');
    return this.http.get(this.urlBase+'/clientes').pipe(
      map(response=>response as Usuario[])
    );
  }
}
