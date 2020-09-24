import { changeSelection } from 'Controllers/App/app.actions';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ButtonGroup from './ButtonGroup.container'
import { IAppState,ButtonGroupSelection } from 'types'

const mapStateToProps = (state:IAppState) => ({
  items:state.items
})

const mapDispatchToProps = (dispatch:Dispatch)=> {
  return {
    changeSelection:(selection:ButtonGroupSelection)=>{
      dispatch(changeSelection(selection))
    },
    
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ButtonGroup)
