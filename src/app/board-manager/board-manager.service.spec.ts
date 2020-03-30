import { TestBed } from '@angular/core/testing';

import { BoardManagerService } from './api.object.service';

describe('BoardManagerService', () => {
  let service: BoardManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
