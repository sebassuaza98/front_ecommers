import { Component, Input, ElementRef, HostListener } from '@angular/core';
import { Product } from '../models/product.model'; 
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  @Input() product: Product | null = null; 
  responseMessage: string = '';

  constructor(private productsService: ProductsService, private elRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.responseMessage = '';
    }
  }

  onSubmit() {
    if (this.product) {
      this.productsService.updateProduct(this.product).subscribe(
        (response) => {
          if (response.status === 200) {
            this.responseMessage = response.message;
            this.product = response.data || this.product;
          } else {
            this.responseMessage = 'Error al actualizar el producto.';
          }
        },
        (error) => {
          this.responseMessage = 'Error en el servidor: No se pudo actualizar el producto.';
        }
      );
    }
  }
}
