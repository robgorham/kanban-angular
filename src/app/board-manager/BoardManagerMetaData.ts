import { EntityMetadataMap } from '@ngrx/data';
import { IBoard, IColumn, ICard } from './models/models';
export const boardManagerMetaData: EntityMetadataMap = {
  Managers: {
    additionalCollectionState: {
      name: 'Test Board'
    },

  },
  Boards: {
    filterFn: filterBoards
  },
  Columns: {
  filterFn: filterColumns

  },
  Cards: {
    filterFn: filterCards
  }
};

export function filterColumns(entities: IColumn[], search: number) {
  return entities.filter(e => e.boardId === search);
}
export function filterBoards(entities: IBoard[], search: number) {
  return entities.filter(e => e.managerId === search);
}

export function filterCards( entities: ICard[], search: number) {
  return entities.filter( e => e.columnId === search);
}
