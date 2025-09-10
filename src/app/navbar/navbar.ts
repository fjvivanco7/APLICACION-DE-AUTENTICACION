import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isAuth = false;

  constructor(private auth: Auth, private router: Router) {
    this.auth.isAuthenticated().subscribe(val => this.isAuth = val);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
