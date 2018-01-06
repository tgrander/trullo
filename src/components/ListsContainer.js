import { connect } from 'react-redux';
import Lists from './Lists';
import convertNormalizedDataToArray from '../utilities/convertNormalizedDataToArray';

const mapStateToProps = ({ lists }) => ({
  lists: convertNormalizedDataToArray(lists.data),
});

export default connect(mapStateToProps)(Lists);
