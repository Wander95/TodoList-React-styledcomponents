import { 
  ITEM_ADDED, 
  ITEM_DELETED,
  ITEM_FILTERED, 
  ITEM_STATUS_CHANGED_ACTIVE, 
  ITEM_STATUS_CHANGED_DELETED 
} from './todo.type';

import { Item,ItemStatus } from 'types'


//*define action interfaces
export interface AddItem {
  type: ITEM_ADDED,
  payload:Item
}


export interface DeleteItem {
  type: ITEM_DELETED,
  payload:Item
}

export interface FilterItem {
  type: ITEM_FILTERED,
  payload:Array<Item>
}

export interface ChangeStatusActive {
  type:ITEM_STATUS_CHANGED_ACTIVE,
  payload:ItemStatus
}

export interface ChangeStatusDeleted {
  type:ITEM_STATUS_CHANGED_DELETED,
  payload:ItemStatus
}



//*define actions
export const addItem = (newItem:Item):ItemActionType=>(
  {
    type:ITEM_ADDED,
    payload:newItem
  }
)

export const filterItem = (items:Array<Item>)=>(
  {
    type: ITEM_FILTERED,
    payload:items
  }
)


export const changeStatusToActive = (itemStatus:ItemStatus):ItemActionType=>{
  return {
    type:ITEM_STATUS_CHANGED_ACTIVE,
    payload:{
      status:itemStatus.status,
      index:itemStatus.index
    }
  }
}

export const changeStatusToDeleted = (itemStatus:ItemStatus):ItemActionType=>{
  console.log('itemStatus', itemStatus)
  return {
    type:ITEM_STATUS_CHANGED_DELETED,
    payload:{
      status:itemStatus.status,
      index:itemStatus.index
    }
  }
}


export type ItemActionType = AddItem | DeleteItem | FilterItem | ChangeStatusActive | ChangeStatusDeleted;