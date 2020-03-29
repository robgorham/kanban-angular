import { TestBed } from '@angular/core/testing';

import { BoardManagerDataService } from './board-manager-data.service';

describe('BoardManagerDataService', () => {
  let service: BoardManagerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardManagerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
