import { IFormik } from 'Components/Form/Form.view';
import { AddItem } from './todo.type'

export interface Item extends IFormik {}

export interface ItemState {
  items:Item[]
}

export type ItemActions = AddItem