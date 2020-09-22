
import { connect } from 'react-redux'
import { IAppState } from 'types'
import Main from './Main.view'


const mapStateToProps = (state:IAppState={ items:[]}) => ({
  items:state.items
})

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Main)
