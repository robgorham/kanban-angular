export interface BoardManager {
  id: number;
  name: string | null;
  boards: Board[] | null;
};
export interface Board {
  id: number;
  name: string;
  columns: Column[] | null;
  deleted: boolean;
  created: Date;
  modified: Date;
};

export interface Column {
  id: number;
    name: string | null;
    cards: Card[] | null;
    deleted: boolean;
    created: Date;
    modified: Date;
};

export interface Card {
  id: string;
    name: string | null;
    content: string | null;
    created: Date;
    modified: Date;
    deleted: boolean;
}

