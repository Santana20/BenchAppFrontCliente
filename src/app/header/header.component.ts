import { Component, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateClienteComponent } from '../cliente/create-cliente/create-cliente.component';
import { PantallaProductoComponent } from '../producto/pantalla-producto/pantalla-producto.component';
import { EventEmitter } from 'protractor';
import { MessageServiceService } from '../servicios/message-service.service';
import { ProductoService } from '../servicios/producto.service';
import { Producto } from '../entidades/producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  producto:Observable<Producto>;
  mensaje:string;

  constructor(private productoService:ProductoService,private servicioComunicacion:MessageServiceService,private ngbModalRef:NgbModal) { }

  ngOnInit(): void {
    this.servicioComunicacion.enviarMensajeObservable.subscribe(mensaje=>{
      this.mensaje=mensaje;
    });
  }
  cambioTexto(mensaje:string){
    this.servicioComunicacion.enviarMensaje(mensaje);
  }
  
  

  
    //Bootstrap Modal
    mostrarBootstrapModal(){
      const opts={
       windowClass:'myCustomClass'
      }
      //utilizando el api
     const modalRefNgBots=this.ngbModalRef.open(CreateClienteComponent,opts);
      //llamando a componente con una instancia para usar su funcion close
     modalRefNgBots.componentInstance.closeMyModal=()=>{
         modalRefNgBots.close();
     }
   }

   
}
