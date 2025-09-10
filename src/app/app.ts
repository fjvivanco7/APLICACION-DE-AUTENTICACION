import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Navbar } from './navbar/navbar';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ]
})
export class App {
  protected readonly title = signal('auth-demo');
}
