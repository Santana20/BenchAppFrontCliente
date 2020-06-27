import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService, private router : Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if( this.authService.isAuthenticated() ) //si esta autenticado
      {
        if ( this.isTokenExpirado() ) //el token expiro
        {
          this.authService.logout();
          this.router.navigate(['/login']);
          return false;
        }
        return true; // entra al componente
      }

      this.router.navigate(['/login']);
      return false;//no esta autenticado
  }
  
  isTokenExpirado() : boolean
  {
    let token = this.authService.getToken();
    let payload = this.authService.obtenerDatosToken(token);
    let now = new Date().getTime()/1000;

    if ( payload.exp < now ) return true;
    return false;
  }
}
