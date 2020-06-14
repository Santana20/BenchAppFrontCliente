import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
//Servicio creado para utilizar el localstorage o sesionstorage
export class MessageServiceService {
  subject = new Subject();

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
}
