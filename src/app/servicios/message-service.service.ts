import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
//Servicio creado para utilizar el localstorage o sesionstorage
export class MessageServiceService {
  //comunicaion entre componentes para enviar textos
  subject = new Subject();
  mensaje:string;
  private enviarMensajeSubject=new Subject<string>();
  enviarMensajeObservable=this.enviarMensajeSubject.asObservable();


  
  constructor() { }

  //envia mensaje de pedidos productos
  sendMsg(pedidoproducto: any)
  {
    this.subject.next(pedidoproducto);
  }

  //retorna mensaje como observable.
  getMsg()
  {
    return this.subject.asObservable();
  }

  //comunicacion entre componentes
  enviarMensaje(mensaje:string){
    this.mensaje=mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
  
  
}
