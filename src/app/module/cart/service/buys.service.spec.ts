import { TestBed } from '@angular/core/testing';

import { BuysService } from './buys.service';
import { HttpClientModule } from '@angular/common/http';

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
});
