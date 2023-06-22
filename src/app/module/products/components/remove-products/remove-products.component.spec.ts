import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveProductsComponent } from './remove-products.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { of } from 'rxjs';
import { Iresponse } from '../../interfaces/Response.interface';

describe('RemoveProductsComponent', () => {
  let component: RemoveProductsComponent;
  let fixture: ComponentFixture<RemoveProductsComponent>;
  let productService: ProductsService
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveProductsComponent, ProductsService],
      providers: [
        {
          provide: MatDialogRef,
          useValue: { id: '64931f9db66c3a3bb502d466', refresh: () => { } }
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}
        }
      ]
    });
    fixture = TestBed.createComponent(RemoveProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* it('should remove a product and refresh data', () => {
    const response: Iresponse = { type: 'Success', message: 'Producto eliminado' };
    spyOn(productService, 'removeProduct').and.returnValue(of(response));

    component.removeProduct();

    expect(productService.removeProduct).toHaveBeenCalledWith('12345');
    expect(component.data.refresh).toHaveBeenCalled();
  }); */
});
