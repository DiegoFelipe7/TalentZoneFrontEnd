import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ModalProductsComponent } from './modal-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('ModalProductsComponent', () => {
  let component: ModalProductsComponent;
  let fixture: ComponentFixture<ModalProductsComponent>;
  let data = {
    id: "64931f9db66c3a3bb502d466",
    refresh: () => { }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ModalProductsComponent, HttpClientTestingModule, BrowserAnimationsModule, ToastrModule.forRoot()],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { data: data } },
        { provide: MatDialogRef, useValue: {} }
      ],
    });
    fixture = TestBed.createComponent(ModalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
