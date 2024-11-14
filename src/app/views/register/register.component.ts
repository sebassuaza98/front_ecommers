import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    id: '',
    name: '',
    password: '',
    role: 'USER'
  };

  errorMessage: string | null = null;

  constructor(private http: HttpClient) {}

  registerUser(registerForm: NgForm) {
    this.http.post('http://localhost:8080/auth/register', this.user)
      .subscribe(
        response => {
          alert('Usuario registrado correctamente');
          // Limpiar los campos del formulario
          this.user = { id: '', name: '', password: '', role: 'USER' };
          // Restablecer el estado del formulario y los mensajes de error
          registerForm.resetForm();
        },
        error => {
          if (error.error && error.error.message) {
            alert(this.errorMessage = error.error.message);
          } else {
            if (error.status === 400) {
              this.errorMessage = 'Datos incorrectos. Intenta nuevamente.';
            } else if (error.status === 500) {
              this.errorMessage = 'Error interno del servidor.';
            } else {
              this.errorMessage = 'Ocurrió un error desconocido.';
            }
          }
        }
      );
  }
}
