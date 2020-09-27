import { Item, } from 'types';
import { 
  ACTIVE_SWITCHED,
  ITEMS_LOADED_FROM_LOCAL_STORAGE,
  ITEM_ADDED,
  ITEM_DELETED,
  ITEM_MODIFIED
} from './todo.type'
import { ItemActionType } from './todo.actions'

const initialState : Array<Item> = [
  {
    id:'unico',
    description:'none',
    price:58,
    active:true
  }
]


const toDoList = (state=initialState,action:ItemActionType):Array<Item>=>{
  switch (action.type) {
    case ITEM_ADDED:
      return [
        ...state,
        action.payload
      ]
      case ITEM_MODIFIED:
        return [
          ...state.map((item)=>{
            if(item.id === action.payload.id){
              return action.payload
            }
            return item
          })
        ]
      case ITEM_DELETED:
        return [
          ...state.filter((item)=>{
            return item.id !== action.payload
          })
        ]
      case ITEMS_LOADED_FROM_LOCAL_STORAGE:
        return action.payload
    case ACTIVE_SWITCHED:
      return state.map((item):Item=>{
        if(item.id === action.payload){
          return {
            ...item,
            active:!item.active
          }
        }
        return item
      })
    default:
      return state;
  }
}

export default toDoList