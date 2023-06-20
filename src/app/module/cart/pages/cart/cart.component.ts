import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Iproducts } from 'src/app/module/products/interfaces/Product.interface';
import { ProductsService } from 'src/app/module/products/services/products.service';
import { Icart } from '../../interfaces/cart.interface';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  products: Iproducts[];
  frmCart: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductsService) {
    this.products = [];
    this.frmCart = this.fb.group({
      quantity: ["", [Validators.required]]
    })

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(ele => {
      this.products = ele;
    })
  }
 

  addCart(product: Iproducts) {
    if (this.frmCart.invalid) {
      return;
    }
    const existingData = localStorage.getItem('cart');
    product.quantity = this.frmCart.get('quantity')?.value;
    let cartItems: Iproducts[] = [];
    if (existingData) {
      cartItems = JSON.parse(existingData);
    }

    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingProductIndex >= 0) {
      cartItems[existingProductIndex] = product;
    } else {
      cartItems.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cartItems));
  }





}
