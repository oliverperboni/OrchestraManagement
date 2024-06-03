import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Musico } from '../types/musico';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class MusicosService {
  private apiUrl = 'http://localhost:8080/musicos';

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getMusicos(comumId: Number): Observable<Musico[]> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.get<Musico[]>(this.apiUrl + '?comunId=' + comumId, { headers });
  }

  public createMusico(musico: Musico): void {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    this.http.post<Musico>(this.apiUrl, musico, { headers });
  }
}
