import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthTokenService } from "../account/shared/auth.service";

@Injectable()
export class CoordinatorGuard implements CanActivate {
  constructor(private auth: AuthTokenService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.auth.isCoordinator()) return true;
    
    this.router.navigate(['404']);
    return false;  
  }
}