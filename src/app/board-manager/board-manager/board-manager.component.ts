import { Component, OnInit } from '@angular/core';
import { BoardManagerService } from '../api.object.service';
import { Column, BoardManager } from '../models/models';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.scss']
})
export class BoardManagerComponent implements OnInit {
  _bms: EntityCollectionService<BoardManager>;
  constructor( EntityCollectionServiceFactory: EntityCollectionServiceFactory,

    ) { this._bms = EntityCollectionServiceFactory.create<BoardManager>('Manager');
    }

  ngOnInit(): void {
    // Testing whether the getAll actually works with the minimum work
    this._bms.getAll().pipe(
      tap( data => {
        console.log("my boards", data)
      })
    ).subscribe();
  }

}
