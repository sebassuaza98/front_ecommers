import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import { ApiResponse } from '../models/api-response.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        if (response.status === 200) {
          this.products = response.data || [];
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;  
  }
}
