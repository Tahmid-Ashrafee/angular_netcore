import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService 
    
  ) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    // Navigate to the cart component
    this.router.navigate(['/cart']);
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.productService.getProductById(productId).subscribe({
          next: (product) => {
            this.product = product;
          },
          error: (response) => {
            console.log(response);
          },
        });
      }
    });
  }
}
