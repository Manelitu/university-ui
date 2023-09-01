import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisciplinesService {
  private api_url = environment.api;

  constructor(private http: HttpClient) {}

  public listDisciplines(): Observable<any> {
    return this.http.get(`${this.api_url}/discipline`);
  }

  public listDisciplineById(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/discipline/${id}`);
  }

  public updateDisciplineById(id: string, data: Partial<Disciplines>): Observable<any> {
    return this.http.patch(`${this.api_url}/discipline/${id}`, data);
  }

  public deleteDisciplineById(id: string): Observable<any> {
    return this.http.delete(`${this.api_url}/discipline/${id}`);
  }
}

export interface Disciplines {
  disciplineId: string;
  name: string;
  hours: number;
  description: string;
  active: boolean;
}