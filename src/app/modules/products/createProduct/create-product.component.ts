import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { ApiResponse } from '../models/api-response.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    stock: 0
  };

  constructor(private productsService: ProductsService) {}

  onSubmit(): void {
    this.productsService.createProduct(this.product).subscribe(
      (response: ApiResponse<Product>) => {
        alert(response.message);
      },
      (error) => {
        console.error('No se Creo el producto', error);
      }
    );
  }
}
