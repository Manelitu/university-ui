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

  public isExpired(): boolean {
    const token = localStorage.getItem('token') as string;
    return this.authService.isTokenExpired(token);
  }

  public isAdmin(): boolean {
    const token = this.getToken();
    const payload = this.decodePayloadJWT(token as string);
    return payload.roles === 'ADMIN';
  }

  public isCoordinator(): boolean {
    const token = this.getToken();
    const payload = this.decodePayloadJWT(token as string);
    return (
      payload.roles === 'COORDINATOR' 
    );
  }

  public isUser(): boolean {
    const token = this.getToken();
    const payload = this.decodePayloadJWT(token as string);
    return (
      payload.roles === 'STUDENT'
      || payload.roles === 'PROFESSOR'
    );
  }

  public isValidToken(token: string): boolean {
    if (!token) return false;
    return this.authService.isTokenExpired(token);
  }
}