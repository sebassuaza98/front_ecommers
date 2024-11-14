import { Component } from '@angular/core';
import { ServicesService } from './services/services.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  orderRequestDTO = {
    randomOrder: false,
    customer: {
      id: null,
      name: '',
      email: ''
    },
    orderItemDTOs: [
      {
        productId: null,
        quantity: null
      }
    ]
  };

  errorMessage: string = '';
  products: any[] = [];
  searchQuery: string = '';

  constructor(private servicesService: ServicesService) {}

  ngOnInit() {
    this.searchProducts();
  }

  searchProducts() {
    this.servicesService.searchProducts().subscribe(
      (response: any[]) => {
        this.products = response;
      },
      (error: HttpErrorResponse) => {
        console.error('Error al buscar productos', error);
        this.errorMessage = 'Error al buscar productos';
      }
    );
  }

  selectProduct(product: any) {
    this.orderRequestDTO.orderItemDTOs[0].productId = product.id;
  }

  createOrder() {
    this.servicesService.createOrder(this.orderRequestDTO).subscribe(response => {
      console.log('Orden creada:', response);

      if (response.status === 201) {
        alert('Orden creada por el valor total de ' + response.data.totalAmount);
      } else {
        const message = typeof response.message === 'string' ? response.message : 'Error desconocido';
        alert('La orden no fue creada: ' + message);
      }

      this.errorMessage = '';
    }, (error: HttpErrorResponse) => {
      const errorMessage = error.error && error.error.message ? error.error.message : 'Error desconocido';
      alert('Error al crear la orden: ' + errorMessage);
    });
  }
}
