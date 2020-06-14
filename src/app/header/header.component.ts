import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateClienteComponent } from '../cliente/create-cliente/create-cliente.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private ngbModalRef:NgbModal) { }

  ngOnInit(): void {
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
