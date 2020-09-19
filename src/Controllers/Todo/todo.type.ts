import { IFormik } from 'Components/Form/Form.view';

export interface Item extends IFormik {

}

export const ITEM_ADDED = 'ITEM_ADDED';

export interface AddItem {
  type: typeof ITEM_ADDED,
  payload:Item
}

export const types = {
  ITEM_ADDED
}

export type ItemActionType = AddItem