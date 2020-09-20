import { Item } from 'types';
import { ITEM_ADDED } from './todo.type'
import { ItemActionType } from './todo.actions'

const initialState : Array<Item> = [
  {
    description:'none',
    price:58
  }
]


const toDoList = (state=initialState,action:ItemActionType):Array<Item>=>{
  switch (action.type) {
    case ITEM_ADDED:
      return [
        ...state,
        action.payload
      ]
    default:
      return state;
  }
}

export default toDoList