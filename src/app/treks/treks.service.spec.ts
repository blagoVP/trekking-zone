import { TestBed } from '@angular/core/testing';

import { TreksService } from './treks.service';

describe('TreksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreksService = TestBed.get(TreksService);
    expect(service).toBeTruthy();
  });
});
