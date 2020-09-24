import { createStore,combineReducers } from 'redux';
import items from './Todo'
import selectState from './App'

import { composeWithDevTools } from 'redux-devtools-extension';



const reducers = combineReducers({
  items,
  selectState
})

const store = createStore(reducers, composeWithDevTools( ));


export default store