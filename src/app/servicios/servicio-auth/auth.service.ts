import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from "../../entidades/cliente";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //variables 
  private usuario : Usuario;
  private token : string
  //variables
  constructor(private http : HttpClient) { }

  public getUsuario() : Usuario
  {
    if ( this.usuario != null ) return this.usuario;
    else if ( this.usuario == null && sessionStorage.getItem('usuario') != null )
    {
      this.usuario = JSON.parse(sessionStorage.getItem('usuario')) as Usuario;
      return this.usuario;
    }

    return new Usuario();
  }

  public getToken() : string
  {
    if ( this.token != null ) return this.token;
    else if ( this.token == null && sessionStorage.getItem('token') != null )
    {
      console.log(sessionStorage.getItem('token'));
      this.token = sessionStorage.getItem('token');
      return this.token;
    }

    return null;
  }

  login(paramUsuario : Usuario) : Observable<any>
  {
    const urlEndpoint = 'http://localhost:8080/oauth/token';

    const credenciales = btoa('angularapp' + ':' + '12345');

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + credenciales
    });

    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', paramUsuario.username);
    params.set('password', paramUsuario.password);

    console.log("los parametros que se envian al rest " + urlEndpoint);
    console.log(params.toString());

    return this.http.post<any>(urlEndpoint, params.toString(), { headers : httpHeaders });
  }

  guardarUsuario(accesToken : string) : void
  {
    let payload = this.obtenerDatosToken(accesToken);

    this.usuario = new Usuario();
    this.usuario.nombre = payload.nombre;
    this.usuario.apellido = payload.apellido;
    this.usuario.email = payload.email;
    this.usuario.username = payload.user_name;
    this.usuario.roles = payload.authorities;

    sessionStorage.setItem('usuario', JSON.stringify(this.usuario));
  }

  guardarToken(accesToken : string) : void
  {
    this.token = accesToken;

    sessionStorage.setItem('token', this.token);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }

  isAuthenticated() : boolean
  {
    let payload = this.obtenerDatosToken(this.getToken());

    if ( payload != null && payload.user_name && payload.user_name.length > 0 ) return true;

    return false;
  }

  hasRole(role : string) : boolean
  {
    if( this.getUsuario().roles.includes(role) ) return true;

    return false;
  }

  logout() : void
  {
    this.token = null;
    this.usuario = null;

    sessionStorage.clear();
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('token');
  }

  agregarAuthorizationHeader(httpHeaders : HttpHeaders)
  {
    let token = this.getToken();
    
    if ( token != null ) return httpHeaders.append('Authorization', 'Bearer ' + token);
    
    return httpHeaders;
  }
}
