import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { HttpClientModule } from '@angular/common/http';
import { Ihistory } from '../../interfaces/History.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductHistoryComponent } from '../../components/product-history/product-history.component';
import { Iproduct } from 'src/app/module/cart/interfaces/buy.interface';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryComponent, HttpClientModule],
      providers: [MatDialog]
    });
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should open product history dialog', () => {

    const products: Iproduct[] = [
      { id: "648a27ce90cd0d0c94b81771", quantity: 10 },
      { id: "649217629a5e832c7773b7ee", quantity: 10 },
    ];


    spyOn(dialog, 'open');

    component.openHistory(products);

    expect(dialog.open).toHaveBeenCalledWith(ProductHistoryComponent, {
      width: '400px',
      data: {
        products: products
      }
    });
  });

  it('should handle search result', () => {
    const event: Ihistory[] = [
      {
        idType: "CC",
        identification: "103748422",
        clientName: "Joy",
        products: [
          {
            id: "648a27ce90cd0d0c94b81771",
            name: "arroz",
            quantity: 10
          },
          {
            id: "649217629a5e832c7773b7ee",
            name: "lenteja",
            quantity: 10
          }

        ]
      }
    ];

    component.handleSearchResult(event);

    expect(component.historySearch).toEqual(event);
  });
});
