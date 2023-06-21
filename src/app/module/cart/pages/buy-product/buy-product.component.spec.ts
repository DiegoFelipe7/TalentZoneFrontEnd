import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyProductComponent } from './buy-product.component';
import { ToastrService } from 'ngx-toastr';

describe('BuyProductComponent', () => {
  let component: BuyProductComponent;
  let fixture: ComponentFixture<BuyProductComponent>;
  let toastrService: ToastrService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BuyProductComponent],
      providers: [ToastrService]
    });
    fixture = TestBed.createComponent(BuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
