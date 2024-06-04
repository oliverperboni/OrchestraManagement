import { AuthService } from '../services/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ROLES } from '../types/role';

@Component({
  selector: 'app-form-musico',
  templateUrl: './form-musico.component.html',
  styleUrl: './form-musico.component.css'
})
export class FormMusicoComponent {

  userForm: FormGroup;
  roles = Object.values(ROLES);

  constructor(private fb: FormBuilder, private authService : AuthService) {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['USER', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
     this.authService.register(userData)
    }
  }

}
