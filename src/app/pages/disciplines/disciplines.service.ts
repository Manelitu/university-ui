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
}

export interface Disciplines {
  disciplineId: string;
  name: string;
  hours: number;
  active: boolean;
}