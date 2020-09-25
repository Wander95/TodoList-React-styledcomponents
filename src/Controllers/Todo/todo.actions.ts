import { 
  ACTIVE_SWITCHED,
  ITEMS_LOADED_FROM_LOCAL_STORAGE,
  ITEM_ADDED,
  ITEM_MODIFIED,
  ITEM_DELETED
} from './todo.type';

import { Item} from 'types'


//*define action interfaces
export interface AddItem {
  type: ITEM_ADDED,
  payload:Item
}

export interface ModifyItem{
  type:ITEM_MODIFIED,
  payload:Item
}

export interface DeleteItem {
  type:ITEM_DELETED,
  payload:string
}

export interface SwitchActiveItem {
  type:ACTIVE_SWITCHED,
  payload:string
}

export interface LoadFromLocalStorage {
  type:ITEMS_LOADED_FROM_LOCAL_STORAGE,
  payload:Array<Item>
}



//*define actions
export const addItem = (newItem:Item):ItemActionType=>(
  {
    type:ITEM_ADDED,
    payload:newItem
  }
)

export const modifyItem = (currentItem:Item):ItemActionType=>(
  {
    type:ITEM_MODIFIED,
    payload:currentItem
  }
)

export const deleteItem = (itemId:string):ItemActionType=>{
  return {
    type:ITEM_DELETED,
    payload:itemId
  }
}

export const switchActive = (itemId:string):ItemActionType=>{
  return {
    type:ACTIVE_SWITCHED,
    payload:itemId
  }
}


export const loadFromLocalStorage = (items:Array<Item>):ItemActionType=>{
  return {
    type:ITEMS_LOADED_FROM_LOCAL_STORAGE,
    payload:items
  }
}



export type ItemActionType = AddItem   | SwitchActiveItem | DeleteItem | LoadFromLocalStorage | ModifyItem;