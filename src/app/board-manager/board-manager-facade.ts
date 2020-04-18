import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceFactory,
  EntityCollectionService,
  QueryParams
} from '@ngrx/data';
import { IColumn, IBoardManager, IBoard } from './models/models';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BoardManagerFacade {
  _bms: EntityCollectionService<IBoardManager>;
  _bs: EntityCollectionService<IBoard>;

  constructor(EntityCollectionServiceFactory: EntityCollectionServiceFactory) {
    this._bms = EntityCollectionServiceFactory.create<IBoardManager>('Managers');
    this._bs = EntityCollectionServiceFactory.create<IBoard>('Boards');
  }
  getAllBoardManagers(): Observable<IBoardManager[]> {
    return this._bms.getAll();
  }
  updateBoardManager(bm: Partial <IBoardManager>): Observable<IBoardManager> {
    return this._bms.update(bm);
  }
  getBoardManagerByID(id: number):  Observable<IBoardManager> {
    return this._bms.getByKey(id);
  }
  createBoardManager(entity: IBoardManager): Observable<IBoardManager> {
    return this._bms.add(entity);
  }
  deleteBoardManager(entity: IBoardManager): Observable<number | string> {
    return this._bms.delete(entity);
  }

  getBoardsByManagerID(id: number): Observable<IBoard[]>{
    const qp: QueryParams = {
      'managerId' : '0'
    }
    return this._bs.getWithQuery(qp);
  }
  getBoardByID(id: number): Observable<IBoard>{
    throw Error('Not Implemented');
  }
  get
}
