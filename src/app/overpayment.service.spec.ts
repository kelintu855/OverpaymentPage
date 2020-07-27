import { TestBed } from '@angular/core/testing';

import { OverpaymentService } from './overpayment.service';

describe('OverpaymentService', () => {
  let service: OverpaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverpaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
