import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Iproducts } from 'src/app/module/products/interfaces/Product.interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-quantity',
  standalone: true,
  imports: [CommonModule, CommonModule, ReactiveFormsModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './quantity.component.html',
})
export class QuantityComponent {
  frmCart: FormGroup;
  @Input("product") product!: Iproducts;
  constructor(private fb: FormBuilder, private toastr: ToastrService) {

    this.frmCart = this.fb.group({
      quantity: ["", [Validators.required]]
    })

  }

  validateInputs(field: string, type: string) {
    return this.frmCart.controls?.[field].errors && this.frmCart.controls?.[field].touched && this.frmCart.get(field)?.hasError(type);
  }
  addCart() {
    if (this.frmCart.invalid) {
      return;
    }
    const existingData = localStorage.getItem('cart');
    this.product.quantity = this.frmCart.get('quantity')?.value;
    let cartItems: Iproducts[] = [];
    if (existingData) {
      cartItems = JSON.parse(existingData);
    }

    const existingProductIndex = cartItems.findIndex(item => item.id === this.product.id);
    if (existingProductIndex >= 0) {
      cartItems[existingProductIndex] = this.product;
    } else {
      cartItems.push(this.product);
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    this.resetForm();
    this.toastr.success('Producto agregado al carrito!', 'Exito!');
  }

  resetForm(): void {
    this.frmCart.reset();
    Object.keys(this.frmCart.controls).forEach(key => {
      this.frmCart.get(key)?.setErrors(null);
    });
  }
}

