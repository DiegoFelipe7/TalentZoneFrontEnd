import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHistoryComponent } from './product-history.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';

describe('ProductHistoryComponent', () => {
  let component: ProductHistoryComponent;
  let fixture: ComponentFixture<ProductHistoryComponent>;
  // Crear un objeto de prueba para el token de inyección
  const matMdcDialogData: InjectionToken<any> = new InjectionToken<any>('MatMdcDialogData');

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductHistoryComponent, HttpClientModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { matMdcDialogData }
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
