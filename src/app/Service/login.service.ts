import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl =`${environment.apiUrl}/Login/ValidateUser`;
  private jwtToken: string | null = null;

  constructor(private http: HttpClient) {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials, { observe: 'response' }).pipe(
      tap(response => {
        console.log('Full API Response:', response); // Debugging: Print full response
  
        const token = response.headers.get('Jwttoken'); // Ensure correct header name
        console.log('Received Token from API:', token); // Debugging
  
        if (token) {
          sessionStorage.setItem('jwtToken', token);
          console.log('Token stored in sessionStorage:', sessionStorage.getItem('jwtToken')); // Verify storage
        } else {
          console.error('Token not found in response headers');
        }
      })
    );
  }
  
  setToken(token: string) {
    this.jwtToken = token;
    sessionStorage.setItem('jwtToken', token);
  }
  

  logout(): void {
    sessionStorage.removeItem('jwtToken');
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwtToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
