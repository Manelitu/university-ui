import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '@/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private api_url = environment.api;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    this.headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  public login(params: LoginParams): Observable<any> {
    return this.http.post(`${this.api_url}/auth/login`, params, { headers: this.headers });
  }
}

export interface LoginParams {
  login: string;
  password: string;
}
