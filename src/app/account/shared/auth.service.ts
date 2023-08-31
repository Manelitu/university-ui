import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  constructor(private authService: JwtHelperService) {}

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public decodePayloadJWT(token: string): any {
    try {
      if (!token) return null;
      return this.authService.decodeToken(token);
    } catch (Error) {
      return null;
    }
  }
}