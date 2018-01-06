import { connect } from 'react-redux';
import * as cardActions from '../../modules/cards/actions';
import * as columnActions from '../../modules/columns/actions';
import List from './List';

export default connect(
  null,
  { ...cardActions, ...columnActions },
)(List);
