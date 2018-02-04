import { connect } from 'react-redux';
import {
  showListInProgress,
  changeListInProgressValue,
  hideNewListComposer,
  saveList,
} from '../../modules/lists/actions';
import NewListComposer from './NewListComposer';

const mapStateToProps = ({ lists }) => {
  const { listInProgressValue, displayListInProgress } = lists.newList;
  return {
    listInProgressValue,
    displayListInProgress,
  };
};

export default connect(
  mapStateToProps,
  {
    showListInProgress,
    changeListInProgressValue,
    hideNewListComposer,
    saveList,
  },
)(NewListComposer);
