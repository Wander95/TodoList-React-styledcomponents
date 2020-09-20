import { ITEM_ADDED, ITEM_DELETED } from './todo.type';
import { Item } from 'types'


//*define action interfaces
export interface AddItem {
  type: ITEM_ADDED,
  payload:Item
}


export interface DeleteItem {
  type: ITEM_DELETED,
  payload:Item
}

export type ItemActionType = AddItem | DeleteItem


//*define actions
export const addItem = (newItem:Item):ItemActionType=>(
  {
    type:ITEM_ADDED,
    payload:newItem
  }
)
