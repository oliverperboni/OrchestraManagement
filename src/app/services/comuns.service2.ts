import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Comuns } from '../types/comuns';

@Injectable({
  providedIn: 'root'
})
export class ComunsService {

  private apiUrl = 'http://localhost:8080/comun';

  constructor(private http: HttpClient, private authService: AuthService) {}

  criarComun(comum: Comuns): Observable<Comuns> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.post<Comuns>(this.apiUrl, comum, { headers });
  }

  getComuns() {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get<Comuns[]>(this.apiUrl, { headers });
  }
}
