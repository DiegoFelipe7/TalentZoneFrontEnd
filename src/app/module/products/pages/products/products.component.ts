import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Iproducts } from '../../interfaces/Product.interface';
import { ModalProductsComponent } from '../../components/modal-products/modal-products.component';
import { ProductsService } from '../../services/products.service';
import { RemoveProductsComponent } from '../../components/remove-products/remove-products.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products: Iproducts[];
  constructor(public dialog: MatDialog, private productService: ProductsService) {
    this.products = [];
  }

  ngOnInit(): void {
    this.getProducst();

  }

  getProducst(): void {
    this.productService.getProducts().subscribe({
      next: (v) => this.products = v,
      error: (e) => console.error(e),
    })
  }
  removeProducts(id: string) {
    this.dialog.open(RemoveProductsComponent, {
      width: "400px",
      data: {
        id: id,
        refresh: () => this.getProducst()
      }
    })
  }
  editProduct(id: string): void {
    this.dialog.open(ModalProductsComponent, {
      width: "500px",
      data: {
        id: id,
        refresh: () => this.getProducst()
      }
    });
  }
  openDialog() {
    this.dialog.open(ModalProductsComponent, {
      width: "500px",
      data: {
        refresh: () => this.getProducst()
      }
    });
  }



}
