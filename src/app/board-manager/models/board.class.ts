import { IBoard, IColumn } from './models';

export class Board implements IBoard {
  id: number;
  name: string;
  columns: IColumn[];
  deleted: boolean;
  managerId: number;
  created: Date;
  modified: Date;
  constructor(name: string = null){

  }
}
