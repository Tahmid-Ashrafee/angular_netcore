import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  getCartItems(): Product[] {
    return this.cart;
  }

  addToCart(product: Product): void {
    this.cart.push(product);
  }

  removeFromCart(productId: string): void {
    this.cart = this.cart.filter((item) => item.id !== productId);
  }

  clearCart(): void {
    this.cart = [];
  }
}
