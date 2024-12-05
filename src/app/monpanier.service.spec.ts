import { TestBed } from '@angular/core/testing';

import { MonpanierService } from './monpanier.service';

describe('MonpanierService', () => {
  let service: MonpanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonpanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
