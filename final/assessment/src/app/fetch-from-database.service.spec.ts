import { TestBed } from '@angular/core/testing';

import { FetchFromDatabaseService } from './fetch-from-database.service';

describe('FetchFromDatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchFromDatabaseService = TestBed.get(FetchFromDatabaseService);
    expect(service).toBeTruthy();
  });
});
