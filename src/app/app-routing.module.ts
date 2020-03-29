import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardManagerComponent } from './board-manager/board-manager/board-manager.component';


const routes: Routes = [
  {
    path: '',
    component: BoardManagerComponent
  },
  {
    path: '**',
    component: BoardManagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
