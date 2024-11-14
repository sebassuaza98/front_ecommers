import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nombreUsuario: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.nombreUsuario = localStorage.getItem('username') || ''; 
  }

  logout() {
    this.router.navigate(['/RegisterComponent']);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
  
}
