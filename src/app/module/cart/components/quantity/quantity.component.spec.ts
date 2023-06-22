import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuantityComponent } from './quantity.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
describe('QuantityComponent', () => {
  let component: QuantityComponent;
  let fixture: ComponentFixture<QuantityComponent>;
  let toastrService: ToastrService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuantityComponent, BrowserAnimationsModule, ToastrModule.forRoot(), ReactiveFormsModule, FormsModule],
      providers: [
        { provide: ToastrService, useClass: ToastrService }
      ]

    });
    fixture = TestBed.createComponent(QuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('reset form', () => {
    component.frmCart.setValue({
      quantity: 5
    });
    component.frmCart.get('quantity')?.setErrors({ customError: true });
    component.resetForm();
    expect(component.frmCart.value).toEqual({
      quantity: null
    });
    expect(component.frmCart.get('quantity')?.errors).toBe(null);
  });

  it('should add product to cart and reset form', () => {

    component.frmCart.setValue({
      quantity: 5
    });

    spyOn(localStorage, 'getItem').and.returnValue('[{"id": 1, "name": "Product A"}]');

    component.product = { id: "4556", name: 'Product A', inInventory: 500, enabled: true, min: 2, max: 200 };

    component.addCart();
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cartItems.length).toBe(1);
    expect(component.frmCart.value).toEqual({
      quantity: null
    });

  });

  it('should not add product to cart if form is invalid', () => {
    component.frmCart.setValue({
      quantity: null
    });

    component.addCart();
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    expect(cartItems.length).toBe(2);

    expect(component.frmCart.value).toEqual({
      quantity: null
    });
  });


});
/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuantityComponent } from './quantity.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
describe('QuantityComponent', () => {
  let component: QuantityComponent;
  let fixture: ComponentFixture<QuantityComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuantityComponent, BrowserAnimationsModule, ReactiveFormsModule, FormsModule]

    });
    fixture = TestBed.createComponent(QuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


}); */
