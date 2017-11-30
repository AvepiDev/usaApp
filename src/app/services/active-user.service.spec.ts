import { TestBed, inject } from '@angular/core/testing';

import { ActiveUserService } from './active-user.service';

describe('ActiveUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveUserService]
    });
  });

  it('should be created', inject([ActiveUserService], (service: ActiveUserService) => {
    expect(service).toBeTruthy();
  }));
});
