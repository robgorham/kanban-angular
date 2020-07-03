import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BoardManagerDataService } from './board-manager-data.service';

describe('BoardManagerDataService', () => {
  let service: BoardManagerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BoardManagerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
