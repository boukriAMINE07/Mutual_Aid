import { TestBed } from '@angular/core/testing';

import { NecessiteuxService } from './necessiteux.service';

describe('NecessiteuxService', () => {
  let service: NecessiteuxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NecessiteuxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
