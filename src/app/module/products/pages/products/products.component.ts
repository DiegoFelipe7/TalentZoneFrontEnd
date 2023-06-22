import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs"
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Iproducts } from '../../interfaces/Product.interface';
import { ModalProductsComponent } from '../../components/modal-products/modal-products.component';
import { ProductsService } from '../../services/products.service';
import { RemoveProductsComponent } from '../../components/remove-products/remove-products.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductAction } from '../../store';
import { SelecProduct } from '../../store/product.selector';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatDialogModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products$: Observable<Iproducts[]>;
  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.products$ = new Observable();
  }

  ngOnInit(): void {
    this.store.dispatch(ProductAction.GETALLPRODUCTS());
    this.products$ = this.store.select(SelecProduct);

  }


  removeProducts(id: string) {
    this.dialog.open(RemoveProductsComponent, {
      width: "400px",
      data: {
        id: id,
      }
    })
  }
  editProduct(id: string): void {
    this.dialog.open(ModalProductsComponent, {
      width: "500px",
      data: {
        id: id,
      }
    });
  }
  openDialog() {
    this.dialog.open(ModalProductsComponent, {
      width: "500px",
      data: {
      }
    });
  }



}
