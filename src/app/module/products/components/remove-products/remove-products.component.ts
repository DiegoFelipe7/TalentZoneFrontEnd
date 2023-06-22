import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../services/products.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductAction } from '../../store';

@Component({
  selector: 'app-remove-products',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './remove-products.component.html',
})
export class RemoveProductsComponent {
  constructor(private store: Store<AppState>, private ialogRef: MatDialogRef<RemoveProductsComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: string }, private productService: ProductsService) {

  }

  closeModal(): void {
    this.ialogRef.close();
  }

  removeProduct() {
    this.store.dispatch(ProductAction.REMOVEPRODUCT({ id: this.data.id }))
    this.closeModal();
  }
}
