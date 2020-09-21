import { connect } from 'react-redux'
import ButtonGroup from './ButtonGroup.container'
import { IAppState } from 'types'



const mapStateToProps = (state:IAppState) => ({
  items:state.items
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ButtonGroup)
