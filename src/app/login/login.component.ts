import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html"

})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login({ username: this.username, password: this.password })
      .then(() => {
        this.router.navigateByUrl('/comuns');
      })
      .catch(error => {
        console.error('Erro ao fazer login', error);
      });
  }
}
