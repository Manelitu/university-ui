import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthTokenService } from "../account/shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthTokenService, private router: Router) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.checkAccess(state.url);
  }

  private checkAccess(url: string): boolean | UrlTree {
    const token = this.auth.getToken() as string;
    
    if (token) return true;

    this.router.navigate(["/login"]);
    return false;
  }
}