import { Component, OnInit, Input } from '@angular/core';
import { IBoard } from '../../models/models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
@Input() board: IBoard;
  constructor() { }

  ngOnInit(): void {
  }
q
}
