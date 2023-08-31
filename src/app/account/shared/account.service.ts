import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { Observable } from 'rxjs';
import { removeStorage } from '../helpers/localstorage.utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private api_url = environment.api;

  constructor(private http: HttpClient, private route: Router) {}

  public login(params: LoginParams): Observable<any> {
    return this.http.post(`${this.api_url}/auth/login`, params);
  }

  public logout(): void {
    removeStorage('token');
    this.route.navigate(['/login']);
  }
}

export interface LoginParams {
  login?: string;
  password?: string;
}
