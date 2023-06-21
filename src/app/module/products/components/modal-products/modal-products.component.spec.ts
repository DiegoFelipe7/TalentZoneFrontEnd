import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductsComponent } from './modal-products.component';
import { ToastrService } from 'ngx-toastr';
import { InjectionToken } from '@angular/core';

describe('ModalProductsComponent', () => {
  let component: ModalProductsComponent;
  let fixture: ComponentFixture<ModalProductsComponent>;

  //const toastConfig: InjectionToken<any> = new InjectionToken<any>('ToastConfig');
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalProductsComponent],
      providers: [ToastrService]
    });
    fixture = TestBed.createComponent(ModalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
