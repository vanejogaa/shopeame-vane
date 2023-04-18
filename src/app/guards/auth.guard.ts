import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../servicios/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private authService: AuthService){}
  
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(["perfil","logout"].includes(route.routeConfig?.path!!)){
      return this.authService.estaLoggeado()
    }
    else if(["login","register"].includes(route.routeConfig?.path!!)){
      return !this.authService.estaLoggeado()
    }
    else{
      return true
    }
    
  }
  
}
