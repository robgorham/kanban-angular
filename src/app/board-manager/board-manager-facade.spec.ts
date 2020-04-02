import { TestBed } from '@angular/core/testing';

import { BoardManagerFacade } from './board-manager-facade';

describe('BoardManagerFacadeService', () => {
  let service: BoardManagerFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardManagerFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
