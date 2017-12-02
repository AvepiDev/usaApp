import { TestBed, inject } from '@angular/core/testing';

import { AddOrderService } from './add-order.service';

describe('AddOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddOrderService]
    });
  });

  it('should be created', inject([AddOrderService], (service: AddOrderService) => {
    expect(service).toBeTruthy();
  }));
});
