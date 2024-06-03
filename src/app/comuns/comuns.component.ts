// comuns.component.ts
import { Component, OnInit } from '@angular/core';
import { ComunsService } from '../services/comuns.service';
import { Comuns } from '../types/comuns';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comuns',
  templateUrl: './comuns.component.html',
})
export class ComunsComponent implements OnInit {
  comuns: Comuns[] = [];

  constructor(
    private comunsService: ComunsService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.comunsService.getComuns().subscribe(
      (comuns) => (this.comuns = comuns),
      (error) => {
        console.error('Erro ao obter comuns', error);
        this.router.navigateByUrl('/login');
      }
    );
  }

  logout(): void {
    this.authService.logout().subscribe(() => console.log('foi deslogado'));
    this.router.navigateByUrl('/login');
  }
  criarComun(): void {
    this.router.navigateByUrl('/criar-comuns');
  }

  navigateToMusicolist(id: number): void {
    this.router.navigate(['/musicolist', id]);
  }
}
