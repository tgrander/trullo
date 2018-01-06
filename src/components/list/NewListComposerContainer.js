import { connect } from 'react-redux';
import {
  addNewList,
  changeNewListValue,
  hideNewListComposer,
  saveNewList,
} from '../../modules/lists/actions';
import NewListComposer from './NewListComposer';

const mapStateToProps = ({ lists }) => ({
  newListValue: lists.newListValue,
  showNewListComposer: lists.showNewListComposer,
});

export default connect(
  mapStateToProps,
  {
    addNewList,
    changeNewListValue,
    hideNewListComposer,
    saveNewList,
  },
)(NewListComposer);
