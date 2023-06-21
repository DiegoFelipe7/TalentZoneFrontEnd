import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHistoryComponent } from './product-history.component';

describe('ProductHistoryComponent', () => {
  let component: ProductHistoryComponent;
  let fixture: ComponentFixture<ProductHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProductHistoryComponent]
    });
    fixture = TestBed.createComponent(ProductHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
