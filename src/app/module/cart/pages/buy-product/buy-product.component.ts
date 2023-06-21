import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproducts } from 'src/app/module/products/interfaces/Product.interface';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms"
import { Ibuy } from "../../interfaces/buy.interface"
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

import { BuysService } from '../../service/buys.service';
import { Ierror, Ierrors } from '../../interfaces/error.interface';
@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './buy-product.component.html',
})
export class BuyProductComponent implements OnInit {
  product: Iproducts[]
  frmBuyProduct: FormGroup;
  constructor(private fb: FormBuilder, private toastr: ToastrService, private buyService: BuysService) {
    this.product = []
    this.frmBuyProduct = this.fb.group({
      idType: ["", Validators.required],
      identification: ["", Validators.required],
      clientName: ["", Validators.required],

    })
  }

  ngOnInit(): void {
    this.getCard();
  }
  getCard(): void {
    if (localStorage.getItem("cart")) {
      const cartItems = localStorage.getItem('cart');
      if (cartItems) {
        this.product = JSON.parse(cartItems);
      }
    }
  }
  validateInputs(field: string, type: string) {
    return this.frmBuyProduct.controls?.[field].errors && this.frmBuyProduct.controls?.[field].touched && this.frmBuyProduct.get(field)?.hasError(type);
  }

  saveBuy() {
    if (this.frmBuyProduct.invalid) {
      return;
    }
    const newObject: Ibuy = {
      idType: this.frmBuyProduct.get("idType")?.value,
      identification: this.frmBuyProduct.get("identification")?.value,
      clientName: this.frmBuyProduct.get("clientName")?.value,
      products: this.product.map((item: Iproducts) => {
        return {
          id: item.id!,
          quantity: item.quantity!
        }
      })
    }
    this.buyService.saveBuys(newObject).subscribe({
      next: () => {
        this.toastr.success("Compra exitosa", "Exitos")
      },
      error: (error: Ierrors) => {
        console.log(error.error.message)
        this.toastr.error(`${error.error.message}`, "Error")

      },
      complete: () => {
        localStorage.removeItem("cart")
      }
    })

  }

  removeProduct(id: string) {
    if (localStorage.getItem("cart")) {
      const data = localStorage.getItem("cart")
      let result: Iproducts[] = JSON.parse(data!)
      const resp = result.filter(ele => ele.id != id);
      localStorage.setItem('cart', JSON.stringify(resp));
      this.getCard();
    }
  }

}


