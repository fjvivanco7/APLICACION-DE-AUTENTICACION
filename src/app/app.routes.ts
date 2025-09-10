import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Profile } from './profile/profile';
import { authGuard } from './auth-guard';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'login', component: Login },
	{ path: 'register', component: Register },
	{ path: 'profile', component: Profile, canActivate: [authGuard] }
];
