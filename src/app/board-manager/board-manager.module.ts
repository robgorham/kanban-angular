import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardManagerRoutingModule } from './board-manager-routing.module';
import { BoardManagerComponent } from './board-manager/board-manager.component';


@NgModule({
  declarations: [BoardManagerComponent],
  imports: [
    CommonModule,
    BoardManagerRoutingModule
  ]
})
export class BoardManagerModule { }
