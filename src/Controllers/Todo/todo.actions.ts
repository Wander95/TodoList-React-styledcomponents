import { 
  ACTIVE_SWITCHED,
  ITEM_ADDED
} from './todo.type';

import { Item} from 'types'


//*define action interfaces
export interface AddItem {
  type: ITEM_ADDED,
  payload:Item
}


export interface SwitchActiveItem {
  type:ACTIVE_SWITCHED,
  payload:string
}

//*define actions
export const addItem = (newItem:Item):ItemActionType=>(
  {
    type:ITEM_ADDED,
    payload:newItem
  }
)


export const switchActive = (itemId:string):ItemActionType=>{
  return {
    type:ACTIVE_SWITCHED,
    payload:itemId
  }
}


export type ItemActionType = AddItem   | SwitchActiveItem;