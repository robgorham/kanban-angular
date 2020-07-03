import { IBoard, IColumn } from './models';

export class Board implements IBoard {
  id: number;
  name: string;
  columns: IColumn[];
  deleted: boolean;
  created: Date;
  modified: Date;
  constructor(name: string = null){

  }
}
