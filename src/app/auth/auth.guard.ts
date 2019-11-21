import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router){}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate(
    next:ActivatedRouteSnapshot,
    state:RouterStateSnapshot): boolean{
      if (localStorage.getItem('userToken') != null)
        return true;
      this.router.navigate(['/login'])
      return false;
    }
}
