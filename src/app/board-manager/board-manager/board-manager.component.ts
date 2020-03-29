import { Component, OnInit } from '@angular/core';
import { BoardManagerService } from '../board-manager.service';
import { Column } from '../models/models';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.scss']
})
export class BoardManagerComponent implements OnInit {

  constructor(private _bms: BoardManagerService) { }

  ngOnInit(): void {
    this._bms.getBoards().subscribe();
    this._bms.getColumns().subscribe();
    this._bms.getCards().subscribe();
    console.log( 'init' );
  }

}
