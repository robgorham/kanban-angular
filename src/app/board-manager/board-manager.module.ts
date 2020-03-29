import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardManagerRoutingModule } from './board-manager-routing.module';
import { BoardManagerComponent } from './board-manager/board-manager.component';
import { BoardManagerService } from './board-manager.service';


@NgModule({
  declarations: [BoardManagerComponent],
  imports: [
    CommonModule,
    BoardManagerRoutingModule
  ],
  providers: [BoardManagerService]
})
export class BoardManagerModule { }
