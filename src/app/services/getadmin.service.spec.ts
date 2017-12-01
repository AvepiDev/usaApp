import { TestBed, inject } from '@angular/core/testing';

import { GetadminService } from './getadmin.service';

describe('GetadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetadminService]
    });
  });

  it('should be created', inject([GetadminService], (service: GetadminService) => {
    expect(service).toBeTruthy();
  }));
});
