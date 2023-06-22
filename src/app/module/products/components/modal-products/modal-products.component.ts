import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductsService } from '../../services/products.service';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { ProductAction } from '../../store';
import { Iproducts } from '../../interfaces/Product.interface';
@Component({
  selector: 'app-modal-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './modal-products.component.html',
})
export class ModalProductsComponent implements OnInit {
  frmProducst: FormGroup;
  constructor(private store: Store<AppState>, private toast: ToastrService, private fb: FormBuilder, private productService: ProductsService, private ialogRef: MatDialogRef<ModalProductsComponent>, @Inject(MAT_DIALOG_DATA) public data: { id: string }) {
    this.frmProducst = this.fb.group({
      name: ["", Validators.required],
      inInventory: ["", Validators.required],
      enabled: ["", Validators.required],
      min: ["", [Validators.required]],
      max: ["", [Validators.required]],
    })
  }
  ngOnInit(): void {
    if (this.data.id) {
      this.productService.getProductId(this.data.id).subscribe((ele) => {
        this.frmProducst.patchValue({
          name: ele.name,
          inInventory: ele.inInventory,
          enabled: ele.enabled,
          min: ele.min,
          max: ele.max
        })
      })
    }

  }

  validateInputs(field: string, type: string) {
    return this.frmProducst.controls?.[field].errors && this.frmProducst.controls?.[field].touched && this.frmProducst.get(field)?.hasError(type);
  }
  closeModal(): void {
    this.ialogRef.close();
  }

  saveProduct() {
    if (this.frmProducst.invalid) {
      return;
    }
    const data: Iproducts = this.frmProducst.getRawValue();
    if (this.data.id) {
      this.store.dispatch(ProductAction.UPDATEPRODUCT({ product: data, id: this.data.id }));
      this.closeModal();

    } else {
      this.store.dispatch(ProductAction.SAVEPRODUCT({ product: data }));
      this.closeModal();
    }
  }


}
