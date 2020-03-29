import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { BoardManager, Column, Card, Board } from './models/models';


@Injectable({
  providedIn: 'root'
})
export class BoardManagerService {

  private _manager: BehaviorSubject<BoardManager>;

  getManagers(): Observable<BoardManager[]> {
    return this._http.get<BoardManager[]>('http://localhost:3000/managers').pipe(
      tap( data => {
        console.log (data);
      })
    )
  }

  getBoards(): Observable<Board[]> {
    return this._http.get<Board[]>('http://localhost:3000/boards').pipe(
      tap(data => {
        console.log( data);
      })
    )
  }

  getColumns(): Observable<Column> {
    return this._http.get<Column>('http://localhost:3000/columns').pipe(
      tap( data => {
        console.log( data);
      })
    )
  }


  getCards(): Observable<Card> {
    return this._http.get<Card>('http://localhost:3000/cards').pipe(
      tap( data => {
        console.log ( data );
      })
    )
  }

  constructor(private _http: HttpClient ) {
    this._manager = new BehaviorSubject<BoardManager>( null );
  }
}
