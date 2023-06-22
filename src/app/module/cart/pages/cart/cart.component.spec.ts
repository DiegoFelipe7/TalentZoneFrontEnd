import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from 'src/app/module/products/services/products.service';
import { of } from 'rxjs';
import { Iproduct } from '../../interfaces/buy.interface';
import { Iproducts } from 'src/app/module/products/interfaces/Product.interface';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let productService: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CartComponent, HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('loading products', () => {
    const mockProducts: Iproducts[] = [

      {
        name: "Lentejas",
        inInventory: 500,
        enabled: true,
        min: 8,
        max: 200
      }

    ];

    spyOn(productService, 'getProducts').and.returnValue(of(mockProducts));

    component.ngOnInit();

    expect(component.products).toEqual(mockProducts);
    expect(productService.getProducts).toHaveBeenCalled();
  });
});
