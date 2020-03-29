import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BoardManagerRoutingModule } from './board-manager-routing.module';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardManagerService } from './board-manager.service';
import { EntityDataModule, DefaultDataServiceConfig, DefaultDataService, EntityDataService } from '@ngrx/data';
import { boardManagerMetaData } from './BoardManagerMetaData';
import { BoardManagerDataService } from './board-manager-data.service';
import { environment } from 'src/environments/environment';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'rob/managers',
  timeout: 3000, // request timeout
}
@NgModule({
  declarations: [BoardManagerComponent],
  imports: [
    CommonModule,
    BoardManagerRoutingModule,
    EntityDataModule.forRoot({
      entityMetadata: boardManagerMetaData
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [BoardManagerService, {
    provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig
  },BoardManagerDataService]
})
export class BoardManagerModule {constructor(
  entityDataService: EntityDataService,
  boardManagerDataService: BoardManagerDataService,
) {
  entityDataService.registerService('Manager', boardManagerDataService); // <-- register it
} }
