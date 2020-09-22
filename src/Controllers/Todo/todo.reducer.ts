import { Item, status } from 'types';
import { 
  ITEM_ADDED, 
  ITEM_DELETED, 
  ITEM_STATUS_CHANGED_ACTIVE, 
  ITEM_STATUS_CHANGED_DELETED 
} from './todo.type'
import { ItemActionType } from './todo.actions'

const initialState : Array<Item> = [
  {
    description:'none',
    price:58,
    status:status.ACTIVE
  }
]


const toDoList = (state=initialState,action:ItemActionType):Array<Item>=>{
  switch (action.type) {
    case ITEM_ADDED:
      return [
        ...state,
        action.payload
      ]
    case ITEM_DELETED:
      return [
        ...state,
        action.payload
      ]
    case ITEM_STATUS_CHANGED_ACTIVE:
      return state.map((item,index)=>{
        if (index === action.payload.index){
          return{
            ...item,
            status:status.ACTIVE
          } 
        }else {
          return item
        }
      })
    case ITEM_STATUS_CHANGED_DELETED:
      return state.map((item,index)=>{
        return index === action.payload.index 
        ? {
          ...item,
          status:status.DELETED
        } 
        : item
      })
    default:
      return state;
  }
}

export default toDoList