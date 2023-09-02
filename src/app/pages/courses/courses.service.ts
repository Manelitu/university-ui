import { Injectable } from '@angular/core';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private api_url = environment.api;

  constructor(private http: HttpClient) {}

  public listCourses(): Observable<any> {
    return this.http.get(`${this.api_url}/courses`);
  }

  public listCourseByName(name: string): Observable<any> {
    return this.http.get(`${this.api_url}/courses/${name}`);
  }

  public createCourse(data: CoursesParams): Observable<any> {
    return this.http.post(`${this.api_url}/courses`, data);
  }

  public updateCourseByName(name: string, data: CoursesParams): Observable<any> {
    return this.http.patch(`${this.api_url}/courses/${name}`, data);
  }

  public deleteCourseByName(name: string): Observable<any> {
    return this.http.delete(`${this.api_url}/courses/${name}`);
  }
}

export interface CoursesParams {
  name: string;
  description: string;
}

export interface Courses {
  courseId: string;
  name: string;
  description: string;
  periods: any;
  active: boolean;
}