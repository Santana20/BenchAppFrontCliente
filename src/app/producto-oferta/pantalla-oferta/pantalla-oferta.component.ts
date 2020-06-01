import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-oferta',
  templateUrl: './pantalla-oferta.component.html',
  styleUrls: ['./pantalla-oferta.component.css']
})
export class PantallaOfertaComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  listarPromo()
  {
    this.router.navigate(['/listarPromo']);
  }
}
