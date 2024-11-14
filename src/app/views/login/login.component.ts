import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    userId: null,
    password: ''
  };

  errorMessage: string = '';
  loading: boolean = false;
  isLoggedIn: boolean = false; 

  constructor(private http: HttpClient) {}

  loginUser() {
    const loginUrl = `http://localhost:8080/auth/login`;

    this.http.post<any>(loginUrl, this.loginData).subscribe(
      (response) => {
        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('username', response.data.username);
          localStorage.setItem('userId', response.data.userId);
          this.isLoggedIn = true; 
        }
      },
      (error) => {
        console.log('Error completo:', error);
        this.errorMessage = error?.error?.message || 'El Servicio Api no esta Encendido.';
      }
    );
  }
}
