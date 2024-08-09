import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';

interface UserParams {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  created_at: string;
}

interface PasswordParams {
  currentPassword: string;
  newPassword: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiUrl = `${environment.BACKEND_API_URL}/users/current`;

  constructor(private http: HttpClient) {}

  fetchCurrent(): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<any>(this.apiUrl, { headers });
  }

  userUpdate(params: UserParams): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(this.apiUrl, params, { headers });
  }

  passwordUpdate(params: PasswordParams): Observable<any> {
    const token = sessionStorage.getItem('netflix-token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put<any>(`${this.apiUrl}/password`, params, { headers });
  }
}
