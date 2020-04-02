import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
  QueryParams
} from '@ngrx/data';
import { Column, BoardManager, Board } from './models/models';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BoardManagerFacade {
  _bms: EntityCollectionService<BoardManager>;
  _bs: EntityCollectionService<Board>;

  constructor(EntityCollectionServiceFactory: EntityCollectionServiceFactory) {
    this._bms = EntityCollectionServiceFactory.create<BoardManager>('Managers');
    this._bs = EntityCollectionServiceFactory.create<Board>('Boards');
  }
  getAllBoardManagers(): Observable<BoardManager[]> {
    return this._bms.getAll();
  }
  updateBoardManager(bm: Partial <BoardManager>): Observable<BoardManager> {
    return this._bms.update(bm);
  }
  getBoardManagerByID(id: number):  Observable<BoardManager> {
    return this._bms.getByKey(id);
  }
  createBoardManager(entity: BoardManager): Observable<BoardManager> {
    return this._bms.add(entity);
  }
  deleteBoardManager(entity: BoardManager): Observable<number | string> {
    return this._bms.delete(entity);
  }

  getBoardsByManagerID(id: number): Observable<Board[]>{
    const qp: QueryParams = {
      'managerId' : '0'
    }
    return this._bs.getWithQuery(qp);
  }
  getBoardByID(id: number): Observable<Board>{
    throw Error('Not Implemented');
  }
  get
}
