import { createStore,combineReducers } from 'redux';
import toDoList from './Todo'

const reducers = combineReducers({
  toDoList
})

const store = createStore(reducers)

export default store