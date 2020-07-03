import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
  QueryParams,
  EntitySelectors$Factory,
  EntitySelectorsFactory
} from '@ngrx/data';
import { IColumn, IBoardManager, IBoard, ICard } from './models/models';
import { Observable, forkJoin, of } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { mergeMap, map, switchMap, concatMap, debounce, debounceTime, tap } from 'rxjs/operators';
import { State } from '@ngrx/store';

export const boardManagerSelectors = new EntitySelectorsFactory().create<IBoardManager>('BoardManager');
export const boardSelectors = new EntitySelectorsFactory().create<IBoard>('Board');
export const columnSelectors = new EntitySelectorsFactory().create<IColumn>('Column');
// export const selectBoardsFromBM = boardSelectors.
@Injectable({
  providedIn: 'root'
})
export class BoardManagerFacade {
  _bms: EntityCollectionService<IBoardManager>;
  _bs: EntityCollectionService<IBoard>;
  _cs: EntityCollectionService<IColumn>;
  _cds: EntityCollectionService<ICard>;
  boards$: Observable<IBoard[]>;
  boardMngr$: Observable<IBoardManager>;
  constructor(EntityCollectionServiceFactory: EntityCollectionServiceFactory) {
    this._bms = EntityCollectionServiceFactory.create<IBoardManager>('Managers');
    this._bs = EntityCollectionServiceFactory.create<IBoard>('Boards');
    this._cs = EntityCollectionServiceFactory.create<IColumn>('Columns');
    this._cds = EntityCollectionServiceFactory.create<ICard>('Cards');
    this.boards$ = this._bs.filteredEntities$;
    this.boardMngr$ = this._bms.filteredEntities$.pipe(
      map( managers => managers[0])
    );

  }

  setBoardFilter(id: number) {
    this._bs.setFilter(id);
  }
  getAllBoardManagers(): Observable<IBoardManager[]> {
    return this._bms.getAll();
  }
  updateBoardManager(bm: Partial <IBoardManager>): Observable<IBoardManager> {
    return this._bms.update(bm);
  }
  getBoardManagerByID(id: number): Observable<IBoardManager> {
    return this._bms.getByKey(id)
    .pipe(
      concatMap(ibm => this.getBoardsByManagerID(ibm.id).pipe(
        concatMap(boards => {
          const res = [];
          boards.forEach( board =>
            res.push(this.getColumnsByBoardId(board.id))
          );
          return res;
        }),
        map((boardArray: IBoard[]) => ({...ibm, boards: boardArray} as IBoardManager))
      )),
    );
  }
  createBoardManager(entity: IBoardManager): Observable<IBoardManager> {
    return this._bms.add(entity);
  }
  deleteBoardManager(entity: IBoardManager): Observable<number | string> {
    return this._bms.delete(entity);
  }

  assembleBoardsByManagerID(bm: IBoardManager): Observable<IBoardManager>{
    return null;
  }
  getBoardsByManagerID(id: number): Observable<IBoard[]>{
    const qp: QueryParams = {
      managerId : '0'
    };
    return this._bs.getWithQuery(qp);
  }
  getBoardByID(id: number): Observable<IBoard>{
    throw Error('Not Implemented');
  }
  getColumnsByBoardId(id: number): Observable<IColumn[]>{
    const qp: QueryParams = {
      boardId: `${id}`
    };
    return this._cs.getWithQuery(qp);
  }
  getCardsByBoardId(id: number): Observable<ICard[]>{
    const qp: QueryParams = {
      columnId: `${id}`
    };
    return this._cds.getWithQuery(qp);
  }
}
