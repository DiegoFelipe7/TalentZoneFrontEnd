import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-remove-products',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './remove-products.component.html',
})
export class RemoveProductsComponent {
  constructor(private ialogRef: MatDialogRef<RemoveProductsComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: string, refresh: () => void }, private productService: ProductsService) {

  }

  closeModal(): void {
    this.ialogRef.close();
  }

  removeProduct() {
    this.productService.removeProduct(this.data.id).subscribe({
      next: (v) => {
        this.data.refresh();
        this.closeModal();
      },
      error: (error) => console.log(error)
    })


  }
}
