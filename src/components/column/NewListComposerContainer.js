import { connect } from 'react-redux'
import {
  addNewList,
  changeNewListValue,
  hideNewListComposer,
  saveNewList,
} from '../../modules/columns/actions'
import NewListComposer from './NewListComposer'

const mapStateToProps = ({ columns }) => ({
  newListValue: columns.newListValue,
  showNewListComposer: columns.showNewListComposer,
})

export default connect(
  mapStateToProps,
  {
    addNewList,
    changeNewListValue,
    hideNewListComposer,
    saveNewList,
  }
)(NewListComposer)
