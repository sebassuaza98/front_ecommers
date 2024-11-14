import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  nombreUsuario: string = '';
  userId: number = 0;
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllUsers();
    this.nombreUsuario = localStorage.getItem('username') || '';
    this.userId = Number(localStorage.getItem('userId')) || 0;
    console.log('userId:', this.userId);
  }

  getAllUsers(): void {
    this.http.get<any[]>('http://localhost:8080/auth/getUsers').subscribe(
      (data) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching users:', error);
        alert(`Error ${error.status}: ${error.message || error.error}`);
      }
    );
  }

  deleteUser(userId: number): void { 
    if (this.userId === userId) {
      alert('No puedes eliminar tu propio usuario.');
      return;
    }
  
    const requestBody = { userId };
  
    this.http.delete('http://localhost:8080/auth/delete', { 
      body: requestBody,  
      responseType: 'text' 
    }).subscribe(
      (response) => {
        alert(response);
        this.users = this.users.filter(user => user.id !== userId);
      },
      (error: HttpErrorResponse) => {
        console.error('Error deleting user:', error);
        alert(`Error ${error.status}: ${error.message || error.error}`);
      }
    );
  }
  
}
