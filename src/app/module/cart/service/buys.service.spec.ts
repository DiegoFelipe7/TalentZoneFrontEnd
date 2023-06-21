import { TestBed } from '@angular/core/testing';

import { BuysService } from './buys.service';
import { HttpClientModule } from '@angular/common/http';
import { Ibuy } from '../interfaces/buy.interface';

describe('BuysService', () => {
  let service: BuysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(BuysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('save buy', (done: DoneFn) => {
    const buy: Ibuy =
    {
      idType: "CC",
      identification: "103748422",
      clientName: "Joy",
      products: [
        {
          id: "648a27ce90cd0d0c94b81771",
          quantity: 10
        },
        {
          id: "649217629a5e832c7773b7ee",
          quantity: 10
        }

      ]
    }

    service.saveBuys(buy).subscribe(savedProduct => {
      expect(savedProduct).toBeDefined();
      expect(savedProduct.clientName).toBe(buy.clientName);
      done();
    })
  });

  it('get historial buy', (done: DoneFn) => {
    const buy: Ibuy =
    {
      idType: "CC",
      identification: "1058788349",
      clientName: "Joy",
      products: [
        {
          id: "648a27ce90cd0d0c94b81771",
          quantity: 10
        },
        {
          id: "649217629a5e832c7773b7ee",
          quantity: 10
        }

      ]
    }

    service.getHistoryUser(buy.identification).subscribe(savedProduct => {
      expect(savedProduct).toBeDefined();
      expect(savedProduct[0].identification).toBe(buy.identification);
      done();
    })
  });

  it('get historial buy', (done: DoneFn) => {
    const buy: Ibuy =
    {
      idType: "CC",
      identification: "252834044",
      clientName: "Juan perez",
      products: [
        {
          id: "648a27ce90cd0d0c94b81771",
          quantity: 10
        },
        {
          id: "649217629a5e832c7773b7ee",
          quantity: 10
        }

      ]
    }

    service.getHistory().subscribe(savedProduct => {
      expect(savedProduct).toBeDefined();
      expect(savedProduct[0].clientName).toBe(buy.clientName);
      done();
    })
  });
});
