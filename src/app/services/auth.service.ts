import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environment';

interface RegisterParams {
  firstName: string;
  lastName: string;
  phone: string;
  birth: string;
  email: string;
  password: string;
}

interface LoginParams {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',  
})
export class AuthService {
  private apiUrl = environment.BACKEND_API_URL;

  constructor(private http: HttpClient) {}

  register(params: RegisterParams): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, params).pipe(
      catchError(this.handleError)
    );
  }

  login(params: LoginParams): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, params).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 400 || error.status === 401) {
      return throwError(error.error);
    }
    return throwError('An unexpected error occurred.');
  }
}
