import { Component, OnInit } from '@angular/core';
import { BoardManagerService } from '../board-manager.service';
import { Column } from '../models/models';
import { BoardManagerDataService } from '../board-manager-data.service';

@Component({
  selector: 'app-board-manager',
  templateUrl: './board-manager.component.html',
  styleUrls: ['./board-manager.component.scss']
})
export class BoardManagerComponent implements OnInit {

  constructor(private _bms: BoardManagerService,
    private _bmd: BoardManagerDataService) { }

  ngOnInit(): void {
    this._bmd.getAll().subscribe();
  }

}
