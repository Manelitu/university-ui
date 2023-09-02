import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PeriodsService {
  private api_url = environment.api;

  constructor(private http: HttpClient) {}

  public listPeriods(): Observable<any> {
    return this.http.get(`${this.api_url}/period`);
  }

  public listPeriodsById(id: string): Observable<any> {
    return this.http.get(`${this.api_url}/period/${id}`);
  }

  public createPeriod(period: CreatePeriod): Observable<any> {
    return this.http.post(`${this.api_url}/period`, period);
  }

  public updatePeriodsById(id: string, data: Partial<CreatePeriod>): Observable<any> {
    return this.http.patch(`${this.api_url}/period/${id}`, data);
  }

  public deletePeriodsById(id: string): Observable<any> {
    return this.http.delete(`${this.api_url}/period/${id}`);
  }
}

export interface CreatePeriod {
  period: string;
  courseId: string;
}

export interface Periods {
	periodId: string;
	period: number;
	disciplines: any;
	active: true
}
