import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environment';

export interface EpisodeType {
  id: number;
  name: string;
  synopsis: string;
  order: number;
  videoUrl: string;
  secondsLong: number;
}

export interface SerieType {
  id: number;
  name: string;
  thumbnailUrl: string;
  synopsis: string;
  episodes?: EpisodeType[];
}

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private apiUrl = `${environment.BACKEND_API_URL}/series`;

  constructor(private http: HttpClient) {}

  getNewestSeries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/newest`).pipe(
      catchError(this.handleError)
    );
  }

  getFeaturedSeries(): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/featured`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  addToFavorite(serieId: number | string): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${environment.BACKEND_API_URL}/favorites`, { serieId }, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  removeFavorite(serieId: number | string): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${environment.BACKEND_API_URL}/favorites/${serieId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getFavorites(): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${environment.BACKEND_API_URL}/favorites`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getSearch(name: string): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/search?name=${name}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  getEpisodes(id: string | number): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  addLike(serieId: number | string): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${environment.BACKEND_API_URL}/likes`, { serieId }, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  removeLike(serieId: number | string): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<any>(`${environment.BACKEND_API_URL}/likes/${serieId}`, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    return throwError(error);
  }
}
