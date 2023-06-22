import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Iproducts } from 'src/app/module/products/interfaces/Product.interface';
import { ProductsService } from 'src/app/module/products/services/products.service';
import { QuantityComponent } from '../../components/quantity/quantity.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { ProductAction } from 'src/app/module/products/store';
import { SelecProduct } from 'src/app/module/products/store/product.selector';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule, QuantityComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  products$: Observable<Iproducts[]>;
  constructor(private productService: ProductsService, private store: Store<AppState>) {
    this.products$ = new Observable();
  }

  ngOnInit(): void {
    this.store.dispatch(ProductAction.GETALLPRODUCTS());
    this.products$ = this.store.select(SelecProduct)
  }

}
