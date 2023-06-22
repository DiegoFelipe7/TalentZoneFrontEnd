import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuyProductComponent } from './buy-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('BuyProductComponent', () => {
  let component: BuyProductComponent;
  let fixture: ComponentFixture<BuyProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        RouterTestingModule,
        ToastrModule.forRoot(),
        HttpClientTestingModule,


      ],
      providers: [
        //ActivatedRoute,
        { provide: ToastrService, useClass: ToastrService },
        { provide: ActivatedRoute, useClass: ActivatedRoute }

      ]
    });

    fixture = TestBed.createComponent(BuyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*  it('should create', () => {
     expect(component).toBeTruthy();
   });
  */

});
