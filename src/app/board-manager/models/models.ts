export interface IBoardManager {
  id: number;
  name: string | null;
  boards: IBoard[] | null;
}
export interface IBoard {
  id: number;
  name: string;
  columns: IColumn[] | null;
  deleted: boolean;
  created: Date;
  modified: Date;
}

export interface IColumn {
  id: number;
  name: string | null;
  cards: ICard[] | null;
  deleted: boolean;
  created: Date;
  modified: Date;
}

export interface ICard {
  id: string;
  name: string | null;
  content: string | null;
  created: Date;
  modified: Date;
  deleted: boolean;
}
