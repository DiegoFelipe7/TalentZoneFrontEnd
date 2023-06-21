import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RemoveProductsComponent } from './remove-products.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('RemoveProductsComponent', () => {
  let component: RemoveProductsComponent;
  let fixture: ComponentFixture<RemoveProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveProductsComponent],
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

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */
});
