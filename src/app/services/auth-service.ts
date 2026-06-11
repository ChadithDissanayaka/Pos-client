import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterData, LoginData } from '../dto/auth/AuthData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8081/api/v1';
  private httpClient = inject(HttpClient);

  register(registerData: RegisterData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/register`, registerData);
  }

  login(loginData: LoginData): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/auth/login`, loginData);
  }
}
