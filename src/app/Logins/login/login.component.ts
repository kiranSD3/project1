import { Component, inject } from '@angular/core';
import { LoginService } from '../../Service/login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor (private logService: LoginService, private router: Router, private http: HttpClient) {}

  username: string = '';
  password: string = '';


  login() {
    this.logService.login({ username: this.username, password: this.password }).subscribe({
      next: () => {       
        alert('Login successful');
        this.router.navigate(['/dashboard']); // Redirect after login
      },
      error: () => {
        alert('Invalid credentials');
      }
    });
  }

  }
  

