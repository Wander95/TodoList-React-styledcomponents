import { ButtonGroupSelection, IChangeGroup } from 'types';
import { SELECTION_CHANGED,REGEX_FILTERED } from './app.type'
import { ItemActionType } from './app.actions'

const initialState : IChangeGroup = {
  filterBy:ButtonGroupSelection.all,
  regexFilter:''
}



const toDoList = (state=initialState,action:ItemActionType):IChangeGroup=>{
  switch (action.type) {
    case SELECTION_CHANGED:
      return {
        ...state,
        filterBy:action.payload
      }
    case REGEX_FILTERED:
      return {
        ...state,
        regexFilter:action.payload
      }
    default:
      return state;
  }
}

export default toDoList