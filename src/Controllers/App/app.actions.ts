import { 
  SELECTION_CHANGED
} from './app.type';

import { ButtonGroupSelection  } from 'types'


//*define action interfaces
export interface ChangeSelection {
  type: SELECTION_CHANGED,
  payload:ButtonGroupSelection
}


//*define actions
export const changeSelection = (selectionGroup:ButtonGroupSelection):ItemActionType=>(
  {
    type:SELECTION_CHANGED,
    payload:selectionGroup
  }
)

export type ItemActionType = ChangeSelection;