import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Oferta } from '../entidades/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {
  private urlBase='http://localhost:8080/api';
  private httpHeaders=new HttpHeaders({'Content-type' : 'application/json'});

  constructor(private http:HttpClient) { }

  getOgertaLista():Observable<any>{
    console.log("llamando a rest :"+this.urlBase+"/ofertas");
    return this.http.get(this.urlBase+"/ofertas").pipe(
     map(response =>response as Oferta[])
    );
  }
}
