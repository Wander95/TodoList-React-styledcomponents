import { IAppState } from 'types';

export const loadState = ()=>{
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null){
      return undefined
    }
    return JSON.stringify(serializedState)
  } catch (error) {
    return undefined
  }
};

export const saveState = (state:IAppState)=>{
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState);
  } catch (error) {
    console.log('error', error)
  }
}

