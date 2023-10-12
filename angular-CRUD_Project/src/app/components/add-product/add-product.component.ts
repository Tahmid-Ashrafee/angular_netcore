import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  newProduct: Product = { 
    id: '',
    name: '',
    type: '',
    price: 0,
    image: null // Initialize the image property as null
  }

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.newProduct.image = e.target.result; // Store the image data in the newProduct object
      };
      reader.readAsDataURL(file);
    }
  }

  addProduct() {
    this.productsService.addProduct(this.newProduct).subscribe({
      next: (product) => {
        this.router.navigate(['products']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
