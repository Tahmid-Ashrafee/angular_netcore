import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  updateProductRequest: Product = {
    id: '',
    name: '',
    type: '',
    price: 0,
    image: '',
  };
  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.productService.getProduct(id).subscribe({
            next: (response) => {
              this.updateProductRequest = response;
            },
          });
        }
      },
    });
  }
  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
            // Process the image data here, e.g., store it in your component or upload it to a server.
        };
        reader.readAsDataURL(file);
    }
  }

  UpdateProduct() {
    this.productService
      .updateProduct(this.updateProductRequest.id, this.updateProductRequest)
      .subscribe({
        next: (response) => {
          this.router.navigate(['products']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}