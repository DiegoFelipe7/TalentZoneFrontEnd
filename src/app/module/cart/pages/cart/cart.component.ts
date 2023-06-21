import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Iproducts } from 'src/app/module/products/interfaces/Product.interface';
import { ProductsService } from 'src/app/module/products/services/products.service';
import { QuantityComponent } from '../../components/quantity/quantity.component';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule, QuantityComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  products: Iproducts[];
  constructor(private productService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(ele => {
      this.products = ele;
    })
  }

}
