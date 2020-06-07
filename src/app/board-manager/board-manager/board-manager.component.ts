import { Component, OnInit } from '@angular/core';
import { IColumn, IBoardManager, IBoard } from '../models/models';
import { tap, concatMap, map } from 'rxjs/operators';
import { BoardManagerFacade } from '../board-manager-facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.scss'],
})
export class BoardManagerComponent implements OnInit {
  boardManager$: Observable<IBoardManager>;
  boards$: Observable<IBoard[]>;
  selectedBoardManager$: Observable<IBoardManager>;
  // columns$: Observable<IColumn[]>;
  // tslint:disable-next-line: variable-name
  constructor(private _bmf: BoardManagerFacade) {}

  ngOnInit(): void {
    this._bmf.setBoardFilter(0);
    this.boardManager$ = this._bmf
      .getBoardManagerByID(0)
      .pipe(
        concatMap((val) =>
          this._bmf.boards$.pipe(
            map((boards) => ({ ...val, boards }))
          )
        )
      );
    this.selectedBoardManager$ = this._bmf.getBoardManagerByID(0);
  }
}
