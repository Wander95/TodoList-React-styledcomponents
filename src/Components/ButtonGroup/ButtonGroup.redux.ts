import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import ButtonGroup from './ButtonGroup.container'
import { IAppState } from 'types'

const mapStateToProps = (state:IAppState) => ({
  items:state.items
})

const mapDispatchToProps = (dispatch:Dispatch)=> {

  return {
    
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ButtonGroup)
