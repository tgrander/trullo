import { connect } from 'react-redux'
import * as cardActions from '../../modules/cards/actions'
import * as columnActions from '../../modules/columns/actions'
import Column from './Column'

export default connect(
  null,
  { ...cardActions, ...columnActions }
)
(Column)
