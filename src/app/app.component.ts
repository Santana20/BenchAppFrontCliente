import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import{CreateClienteComponent} from './cliente/create-cliente/create-cliente.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontClient';

   constructor(private ngbModalRef:NgbModal){

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

