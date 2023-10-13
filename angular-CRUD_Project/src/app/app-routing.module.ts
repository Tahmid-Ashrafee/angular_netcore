import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  { 
    path: 'products/product-detail/:id',
    component: ProductDetailComponent 
  },
  {
    path: 'products/add',
    component: AddProductComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  },
  { 
    path: 'products/:id',
    component: AddToCartComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
