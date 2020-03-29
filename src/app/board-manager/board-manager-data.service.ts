import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { BoardManager } from './models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { BoardManagerService } from './board-manager.service';

@Injectable({
  providedIn: 'root'
})
export class BoardManagerDataService extends DefaultDataService<BoardManager> {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private bm: BoardManagerService) {
      super( 'Manager', http, httpUrlGenerator);
     }


     getAll(): Observable<BoardManager[]> {
      return this.bm.getManagers();
     }
}
