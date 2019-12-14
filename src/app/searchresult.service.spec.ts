import { TestBed } from '@angular/core/testing';

import { SearchresultService } from './searchresult.service';

describe('SearchresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchresultService = TestBed.get(SearchresultService);
    expect(service).toBeTruthy();
  });
});
