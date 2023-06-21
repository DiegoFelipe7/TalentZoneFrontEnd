import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './module/products/pages/products/products.component';
import { CartComponent } from './module/cart/pages/cart/cart.component';
import { BuyProductComponent } from './module/cart/pages/buy-product/buy-product.component';
import { HistoryComponent } from './module/products/pages/history/history.component';

const routes: Routes = [
  {
    path: "", component: ProductsComponent
  },
  {
    path: "cart", component: CartComponent
  },
  {
    path: "history", component: HistoryComponent
  },
  {
    path: "cart/payment", component: BuyProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
