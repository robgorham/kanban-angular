import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator, DefaultDataServiceConfig } from '@ngrx/data';
import { IBoardManager } from './models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoardDataService extends DefaultDataService<IBoardManager> {

  // Need this in order to inject the config
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config: DefaultDataServiceConfig,
    ) {
      super( 'Boards', http, httpUrlGenerator, config);
     }
}
