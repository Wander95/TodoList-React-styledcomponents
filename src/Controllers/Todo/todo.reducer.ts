import { ItemState,ItemActions } from './types';
import { types } from './todo.type'

const initialState: ItemState = {
  items:[
    {
      description:'none',
      price:58
    }
  ]
}

const toDoList = (state=initialState,action:ItemActions):ItemState=>{
  switch (action.type) {
    case types.ITEM_ADDED:
      return {
        items:[
          ...state.items,
          action.payload
        ]
      };
    default:
      return state;
  }
}

export default toDoList