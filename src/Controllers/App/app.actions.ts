import { 
  REGEX_FILTERED,
  SELECTION_CHANGED
} from './app.type';

import { ButtonGroupSelection  } from 'types'


//*define action interfaces
export interface ChangeSelection {
  type: SELECTION_CHANGED,
  payload:ButtonGroupSelection
}



export interface FilterRegex {
  type: REGEX_FILTERED,
  payload:string
}


//*define actions
export const changeSelection = (selectionGroup:ButtonGroupSelection):ItemActionType=>(
  {
    type:SELECTION_CHANGED,
    payload:selectionGroup
  }
)


export const regexFiltered = (regexValue:string):ItemActionType=>(
  {
    type:REGEX_FILTERED,
    payload:regexValue
  }
)

export type ItemActionType = ChangeSelection | FilterRegex;