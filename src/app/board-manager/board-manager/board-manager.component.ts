import { Component, OnInit } from '@angular/core';
import { IColumn, IBoardManager, IBoard } from '../models/models';
import { tap } from 'rxjs/operators';
import { BoardManagerFacade } from '../board-manager-facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.scss']
})
export class BoardManagerComponent implements OnInit {

  boardManager$: Observable<IBoardManager>;
  boards$: Observable<IBoard[]>;
  constructor(private _bmf: BoardManagerFacade) {}

  ngOnInit(): void {
    // Testing whether the getAll actually works with the minimum work
    this.boardManager$ = this._bmf.getBoardManagerByID(0);
    this.boards$ = this._bmf.getBoardsByManagerID(0)
    .pipe(
      tap( data => console.log('managerId:0', data ))
      )
  }
}
