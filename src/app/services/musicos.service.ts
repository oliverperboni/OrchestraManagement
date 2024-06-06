import { Musico } from './../types/musico';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

    return this.http.get<Musico[]>(this.apiUrl + '?comunId=' + comumId, {
      headers,
    });
  }

  public createMusico(musico: Musico): Observable<Musico> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.post<Musico>(this.apiUrl, musico, { headers });
  }

  obterMusicoPorId(musicoId: number) :Observable<Musico> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();
    let res : Musico;

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    const url = `${this.apiUrl}/onlyOne?musicoId=${musicoId}`;

    return this.http.get<Musico>(url, { headers })

  }

  public deleteMusico(id: number): Observable<Musico> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    return this.http.delete<Musico>(this.apiUrl + '?id=' + id, { headers });
  }

  atualizaMusico(musico: Musico, id: number): Observable<Musico> {
    const token = this.authService.getToken();
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    const url = `${this.apiUrl}?id=${id}`;
    return this.http.put<Musico>(url, musico, { headers });
  }
}
