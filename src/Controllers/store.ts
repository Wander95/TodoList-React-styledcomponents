import { createStore,combineReducers } from 'redux';
import items from './Todo'


const reducers = combineReducers({
  items
})

const store = createStore(reducers)

export default store