import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {
  username = '';
  password = '';
  error = '';
  success = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit() {
    this.error = '';
    this.success = '';
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.success = 'Usuario registrado. Ahora puedes iniciar sesión.';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: err => this.error = err.error?.message || 'Registro fallido'
    });
  }
}
