import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { BoardManagerModule } from './board-manager/board-manager.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataService } from '@ngrx/data';
import { BoardManagerDataService } from './board-manager/board-manager-data.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://localhost:3000/managers',
  timeout: 3000, // request timeout
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BoardManagerModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [ {
    provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { constructor(
  entityDataService: EntityDataService,
  boardManagerDataService: BoardManagerDataService,
) {
  entityDataService.registerService('Manager', boardManagerDataService); // <-- register it
}}
