import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, DefaultDataServiceConfig } from '@ngrx/data';
import { BoardManager } from './models/models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { BoardManagerService } from './api.object.service';

@Injectable({
  providedIn: 'root'
})
export class BoardManagerDataService extends DefaultDataService<BoardManager> {

  // Need this in order to inject the config
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config: DefaultDataServiceConfig,
    private bm: BoardManagerService) {
      super( 'Managers', http, httpUrlGenerator, config);
     }
}
