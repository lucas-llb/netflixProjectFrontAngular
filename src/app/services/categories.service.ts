import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { SerieType } from './serie.service';


export interface CategoryType {
  id: number;
  name: string;
  position: number;
  series?: SerieType[];
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = `${environment.BACKEND_API_URL}/categories`;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  getSeries(id: number): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers });
  }
}
