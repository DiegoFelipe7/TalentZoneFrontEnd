import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Iproduct } from 'src/app/module/cart/interfaces/buy.interface';
import { map } from "rxjs/operators"
import { Iproducts } from '../../interfaces/History.interface';
@Component({
  selector: 'app-product-history',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-history.component.html',
})
export class ProductHistoryComponent implements OnInit {
  products: Iproducts[]
  constructor(private productService: ProductsService, private ialogRef: MatDialogRef<ProductHistoryComponent>, @Inject(MAT_DIALOG_DATA) public data: { products: Iproduct[] }) {
    this.products = [];
  }
  ngOnInit(): void {
    this.data.products.map(ele => {
      this.productService.getProductId(ele.id).pipe(
        map(prod => {
          return {
            id: ele.id,
            quantity: ele.quantity,
            name: prod.name!
          };
        })
      ).subscribe(ele => this.products.push(ele));
    })
  }
}
