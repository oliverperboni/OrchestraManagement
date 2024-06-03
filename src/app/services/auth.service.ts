import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token } from '../types/token';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'token';
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  login(credentials: { username: string, password: string }): Promise<void> {
    return this.http.post<Token>(`${this.apiUrl}/login`, credentials)
      .toPromise()
      .then(token => {
        localStorage.setItem(this.tokenKey, token?.access_token || '');
      });
  }

  logout(){
    let headers = new HttpHeaders();

    if (this.getToken()) {
      headers = headers.set('Authorization', `Bearer ${this.getToken()}`);
    }

    let aux_tolken = this.getToken();
    localStorage.setItem(this.tokenKey, '');
    return this.http.post<Token>(`${this.apiUrl}/logout`, { headers })

  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
