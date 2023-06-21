import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveProductsComponent } from './remove-products.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('RemoveProductsComponent', () => {
  let component: RemoveProductsComponent;
  let fixture: ComponentFixture<RemoveProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RemoveProductsComponent],
      providers: [
        {
          provide: MatDialogRef,
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
});
