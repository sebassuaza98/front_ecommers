import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'http://localhost:8080/orders/create';
  

  constructor(private http: HttpClient) { }

  createOrder(orderRequestDTO: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, orderRequestDTO); 
  }
  searchProducts() {
    return this.http.get<any[]>(`http://localhost:8080/api/produtsActive`);
  }
  
}
