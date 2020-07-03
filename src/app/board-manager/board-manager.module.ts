import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BoardManagerRoutingModule } from './board-manager-routing.module';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { EntityDataModule, DefaultDataServiceConfig, DefaultDataService, EntityDataService } from '@ngrx/data';
import { boardManagerMetaData } from './BoardManagerMetaData';
import { BoardManagerDataService } from './board-manager-data.service';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BoardManagerFacade } from './board-manager-facade';
import { BoardComponent } from './board-manager/board/board.component';
import { MaterialModule } from '../material/material.module';
import { BoardDataService } from './board-data.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
  timeout: 3000, // request timeout
};
@NgModule({
  declarations: [BoardManagerComponent, BoardComponent],
  imports: [
    CommonModule,
    BoardManagerRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forFeature([]),
    EntityDataModule.forRoot({
      entityMetadata: boardManagerMetaData,
      pluralNames: {
        Managers: 'Managers',
        Cards: 'Cards',
        Boards: 'Boards',
        Columns: 'Columns'
      }
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    MaterialModule
  ],
  providers: [ {
    provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig
  }, BoardManagerDataService, BoardDataService,
  BoardManagerFacade]
})
export class BoardManagerModule {constructor(
  entityDataService: EntityDataService,
  boardManagerDataService: BoardManagerDataService,
  boardDataService: BoardDataService
) {
  entityDataService.registerServices({Manager: boardManagerDataService, Board: boardDataService }); // <-- register it
} }
