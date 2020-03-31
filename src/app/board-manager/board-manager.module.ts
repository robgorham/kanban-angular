import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BoardManagerRoutingModule } from './board-manager-routing.module';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardManagerService } from './api.object.service';
import { EntityDataModule, DefaultDataServiceConfig, DefaultDataService, EntityDataService } from '@ngrx/data';
import { boardManagerMetaData } from './BoardManagerMetaData';
import { BoardManagerDataService } from './board-manager-data.service';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
  timeout: 3000, // request timeout
}
@NgModule({
  declarations: [BoardManagerComponent],
  imports: [
    CommonModule,
    BoardManagerRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forFeature([]),
    EntityDataModule.forRoot({
      entityMetadata: boardManagerMetaData,
      pluralNames: {
        Managers: 'Managers'
      }
    }),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [BoardManagerService, {
    provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig
  },BoardManagerDataService, ]
})
export class BoardManagerModule {constructor(
  entityDataService: EntityDataService,
  boardManagerDataService: BoardManagerDataService,
) {
  entityDataService.registerService('Manager', boardManagerDataService); // <-- register it
} }
