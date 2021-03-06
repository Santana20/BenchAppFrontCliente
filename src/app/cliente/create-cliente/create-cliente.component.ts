import { Component, OnInit ,ViewEncapsulation, Input} from '@angular/core';
import { Usuario } from 'src/app/entidades/cliente';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { Router } from '@angular/router';
//importamos el modal
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  encapsulation:ViewEncapsulation.None,//necesitamos importar esto para los colores
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {
  cliente:Usuario=new Usuario();

  confirmpassword : string;
  constructor( public modal:NgbModal,private clienteService:ClienteService,private router:Router) { }

  //es como crear una propiedad de la clase
  @Input() closeMyModal:(any)=>void;

  ngOnInit(): void {}

  Opensm(contenido)
  {
    this.modal.open(contenido,{size:'sm'});
  }

  OpenBackground(contenido)
  {
    this.modal.open(contenido,{backdropClass:'azul',windowClass:'ventana'});
  }

  OpenOscuro(contenido)
  {
    this.modal.open(contenido,{windowClass:'oscuro'});
  }

  save(form : NgForm)
  {
    console.log(this.cliente);
    this.cliente.enabled=true;
    this.clienteService.createCliente(this.cliente).subscribe(
      data=>this.router.navigate([])
      
    );
    console.log("Hola" + this.cliente.nombre + " Te has registrado con éxito!");
    swal.fire("Hola "+this.cliente.nombre+"Te has registrado con éxito!",'success')
    form.resetForm();
  }


}
