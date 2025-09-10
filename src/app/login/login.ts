import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: Auth, private router: Router) {}

  onSubmit() {
    this.error = '';
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/profile']),
      error: err => this.error = err.error?.message || 'Login failed'
    });
  }
}
