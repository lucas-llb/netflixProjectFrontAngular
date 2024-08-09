import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

interface WatchTimeParams {
  episodeId: number;
  seconds: number;
}

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private apiUrl = `${environment.BACKEND_API_URL}/episodes`;

  constructor(private http: HttpClient) {}

  getWatchTime(episodeId: number): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(`${this.apiUrl}/${episodeId}/watchTime`, { headers });
  }

  setWatchTime(params: WatchTimeParams): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<any>(`${this.apiUrl}/${params.episodeId}/watchTime`, { seconds: params.seconds }, { headers });
  }
}
