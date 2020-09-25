import { createStore,combineReducers } from 'redux';
import items from './Todo'
import selectState from './App'

import { composeWithDevTools } from 'redux-devtools-extension';
 


const rootReducer = combineReducers({
  items,
  selectState
})


const store = createStore(rootReducer, composeWithDevTools());

export const persistor= ''

export default store