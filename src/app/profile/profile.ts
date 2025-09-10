import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {
  user: any = null;
  error = '';

  constructor(private auth: Auth) {}

  ngOnInit() {
    this.auth.getProfile().subscribe({
      next: data => this.user = data,
      error: err => this.error = err.error?.message || 'No se pudo cargar el perfil'
    });
  }
}
