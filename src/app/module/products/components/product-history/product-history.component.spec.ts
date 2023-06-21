import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHistoryComponent } from './product-history.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

describe('ProductHistoryComponent', () => {
  let component: ProductHistoryComponent;
  let fixture: ComponentFixture<ProductHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductHistoryComponent, HttpClientModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {} // Objeto de prueba para MatDialogRef
        }
      ]
    });
    fixture = TestBed.createComponent(ProductHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
