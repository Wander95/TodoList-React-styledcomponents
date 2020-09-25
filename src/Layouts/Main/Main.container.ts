
import { connect } from 'react-redux'
import { IAppState,ButtonGroupSelection,Item } from 'types'
import Main from './Main.view'

const selectFilteredItems = (state:IAppState)=>{
  const { selectState } = state;

  if(selectState.filterBy === ButtonGroupSelection.all){
      return state.items
  }

  if(selectState.filterBy === ButtonGroupSelection.active){
    return state.items.filter((item)=>{
      return item.active
    })
  }

  if(selectState.filterBy === ButtonGroupSelection.deleted){
    return state.items.filter(item=>{
      return !item.active
    })
  }

  return state.items
}


const selectFilteredRegex = (items:Item[],state:IAppState)=>{
  const inputState = state.selectState.regexFilter;
  const regex = new RegExp(inputState,'g');

  return items.filter((item)=>{
    return item.description.toLowerCase().match(regex)
  })
}

const mapStateToProps = (state:IAppState) => {
  selectFilteredRegex(selectFilteredItems(state),state)
  return {
    items:selectFilteredRegex(
      selectFilteredItems(state),
      state
    )
  }
}

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Main)
