import { TestBed } from '@angular/core/testing';

import { CheckAuthenticationService } from './check-authentication.service';

describe('CheckAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckAuthenticationService = TestBed.get(CheckAuthenticationService);
    expect(service).toBeTruthy();
  });
});
