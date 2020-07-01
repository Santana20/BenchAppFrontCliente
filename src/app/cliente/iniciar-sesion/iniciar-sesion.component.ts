import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/entidades/cliente';
import { AuthService } from "../../servicios/servicio-auth/auth.service";
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import  swal  from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  encapsulation:ViewEncapsulation.None,//necesitamos importar esto para los colores
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  //variables
  titulo: string = 'Por favor Inicie Sesion!';
  usuario: Usuario;
  //variables

  constructor(private authService: AuthService, private router: Router,public modal:NgbModal) 
  {
    this.usuario = new Usuario();
  }
  @Input() closeMyModal:(any)=>void;
  ngOnInit(): void 
  {
    if ( this.authService.isAuthenticated() )
    {
      console.log("Hola" + this.authService.getUsuario().username + "ya estás autenticado!");
      this.router.navigate(['']);
    }
  }

  login() : void
  {
    console.log(this.usuario);

    //solo es para validar los datos que esten llenos, luego hacer la validacion de siempre
    if( this.usuario.username == null || this.usuario.password == null )
    {
      return;
    }

    this.authService.login(this.usuario).subscribe(response => 
      {
        console.log("login: " + response.access_token);

        this.authService.guardarUsuario(response.access_token);
        this.authService.guardarToken(response.access_token);
        let usu = this.authService.getUsuario();
        this.router.navigate(['']);

        console.log("Hola" + usu.username + "has iniciado sesión con éxito!");
        swal.fire("Hola "+usu.username+" has iniciado sesión con éxito!",'success')
      }, 
      err =>
      {
        if ( err.status == 400 ) console.log("Error login, Usuario o clave incorrecta");swal.fire("Error login, Usuario o clave incorrecta",'success');
      }
      );
  }
  
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


}
