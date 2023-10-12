import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {
  product: Product;
  quantity: number = 1; // Default quantity

  constructor(private productService: ProductsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getProduct(productId).subscribe((product) => {
        this.product = product;
      });
    });
  }

  incrementQuantity() {
    this.quantity++;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
  placeOrder() {
    // Display an alert when the "Order" button is clicked
    alert('Order successfully placed!');
  }
}