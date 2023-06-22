import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyProductComponent } from './buy-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BuysService } from '../../service/buys.service';



describe('BuyProductComponent', () => {
  let component: BuyProductComponent;
  let fixture: ComponentFixture<BuyProductComponent>;
  let buyService: BuysService;
  let toastrService: ToastrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,
      ],
    });

    fixture = TestBed.createComponent(BuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove product from cart', () => {
    const mockProduct = { id: '1', name: 'Product 1' };
    const mockCart = [mockProduct, { id: '2', name: 'Product 2' }];

    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(mockCart));
    spyOn(localStorage, 'setItem');
    component.removeProduct('1');
    expect(localStorage.getItem).toHaveBeenCalledWith('cart');
    expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{ id: '2', name: 'Product 2' }]));
  });


  /*  it('get All product of localtorage', () => {
     const mockCartItems = '[{"id": "1", "quantity": 5}, {"id": "2", "quantity": 3}]';
 
     spyOn(localStorage, 'getItem').and.returnValue(mockCartItems);
 
     component.getCard();
 
     expect(localStorage.getItem).toHaveBeenCalledWith('cart');
     expect(component.product).toEqual(JSON.parse(mockCartItems));
   });
  */
  it('should not update the product array if cart items are not found in localStorage', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    component.getCard();

    expect(localStorage.getItem).toHaveBeenCalledWith('cart');
  });


});

