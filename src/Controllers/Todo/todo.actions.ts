import { ItemActionType,ITEM_ADDED } from './todo.type';
import { Item } from './types'

export const addItem = (newItem:Item):ItemActionType=>(
  {
    type:ITEM_ADDED,
    payload:newItem
  }
)