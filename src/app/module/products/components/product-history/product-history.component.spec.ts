import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHistoryComponent } from './product-history.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { Iproduct } from 'src/app/module/cart/interfaces/buy.interface';

describe('ProductHistoryComponent', () => {
  let component: ProductHistoryComponent;
  let fixture: ComponentFixture<ProductHistoryComponent>;
  let product: Iproduct[] = [
    {
      id: "64931f9db66c3a3bb502d466",
      quantity: 10
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatInputModule, MatDialogModule, HttpClientModule],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: { data: product } }
      ],
    });
    fixture = TestBed.createComponent(ProductHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

});
