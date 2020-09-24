
import { connect } from 'react-redux'
import { IAppState,ButtonGroupSelection } from 'types'
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

const mapStateToProps = (state:IAppState) => {
  return {
    items:selectFilteredItems(state)
  }
}

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Main)
