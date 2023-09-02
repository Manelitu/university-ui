import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api_url = environment.api;

  constructor(private http: HttpClient) {}

  public listUsers(): Observable<any> {
    return this.http.get(`${this.api_url}/users`);
  }

  public listUserById(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/users/${id}`);
  }

  public createUser(data: CreateUser): Observable<any> {
    return this.http.post(`${this.api_url}/users`, data);
  }

  public updateUserById(id: string, data: Partial<CreateUser>): Observable<any> {
    return this.http.patch(`${this.api_url}/users/${id}`, data);
  }

  public deleteUserById(id: string): Observable<any> {
    return this.http.delete(`${this.api_url}/users/${id}`);
  }
}

export interface Users {
  id: string;
  name: string;
  email: string;
  password: string;
  roles: string;
  active: boolean;
  createdAt: string;
}

export interface CreateUser {
  name: string;
  email: string;
  password: string;
  roles: string;
}