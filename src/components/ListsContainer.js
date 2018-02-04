import { connect } from 'react-redux';
import Lists from './Lists';

const mapStateToProps = ({ lists, cards }) => ({
  // denormalize redux state when passing it to the view
  lists: lists.allIds.map((id) => {
    const list = lists.byId[id];
    return {
      ...list,
      cards: list.cards.map(cardId => cards.byId[cardId]),
    };
  }),
});

export default connect(mapStateToProps)(Lists);
