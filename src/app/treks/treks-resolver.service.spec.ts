import { TestBed } from '@angular/core/testing';

import { TreksDetailsResolverService } from './treks-resolver.service';

describe('TreksDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreksDetailsResolverService = TestBed.get(TreksDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
