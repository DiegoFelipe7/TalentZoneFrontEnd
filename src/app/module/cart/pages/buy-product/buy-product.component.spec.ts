import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductComponent } from './buy-product.component';
import { ToastrService } from 'ngx-toastr';

describe('BuyProductComponent', () => {
  let component: BuyProductComponent;
  let fixture: ComponentFixture<BuyProductComponent>;
  let toasService: ToastrService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BuyProductComponent, ToastrService]
    });
    fixture = TestBed.createComponent(BuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
