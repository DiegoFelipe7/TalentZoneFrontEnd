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
import { Ierrors } from '../../interfaces/error.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { CartAction } from '../../store';
import { Observable, take } from 'rxjs';
import { SelectorLoading, SelectorProducts } from '../../store/cart.selector';
@Component({
  selector: 'app-buy-product',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule, MatInputModule],
  templateUrl: './buy-product.component.html',
})
export class BuyProductComponent implements OnInit {
  product$: Observable<Iproducts[]>
  frmBuyProduct: FormGroup;
  loading$: Observable<Boolean>
  constructor(private fb: FormBuilder, private toastr: ToastrService, private buyService: BuysService, private store: Store<AppState>) {
    this.product$ = new Observable();
    this.loading$ = new Observable();
    this.frmBuyProduct = this.fb.group({
      idType: ["", Validators.required],
      identification: ["", Validators.required],
      clientName: ["", Validators.required],

    })
  }

  ngOnInit(): void {
    this.store.dispatch(CartAction.GETALLCART());
    this.getCard();
    this.loading$ = this.store.select(SelectorLoading);
    this.product$ = this.store.select(SelectorProducts);


  }
  getCard(): void {
    if (localStorage.getItem("cart")) {
      const cartItems = localStorage.getItem('cart');
      if (cartItems) {
        this.store.dispatch(CartAction.GETALLCARTSUCCEFUL({ product: JSON.parse(cartItems) }));
      }
    } else {
      this.store.dispatch(CartAction.GETALLCARTFAILED());
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
      products: []
    };

    this.product$.pipe(take(1)).subscribe((items: Iproducts[]) => {
      newObject.products = items.map((item: Iproducts) => {
        return {
          id: item.id!,
          quantity: item.quantity!
        };
      });
    });
    console.log(newObject)
    /* this.buyService.saveBuys(newObject).subscribe({
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
     }) */

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


