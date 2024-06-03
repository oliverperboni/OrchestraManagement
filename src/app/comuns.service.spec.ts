import { TestBed } from '@angular/core/testing';

import { ComunsService } from './comuns.service';

describe('ComunsService', () => {
  let service: ComunsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
