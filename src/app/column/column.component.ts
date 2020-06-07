import { Component, OnInit, Input } from '@angular/core';
import { IColumn } from '../board-manager/models/models';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  @Input() column: IColumn;
  constructor() { }

  ngOnInit(): void {
  }

}
