import { connect } from 'react-redux';
import { setVisibilityFilter } from '../store/actions.js';
import Navigation from '../components/Navigation/Navigation.js';

function mapDispatchToProps(dispatch) {
  return {
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
  }
}

export default connect(undefined, mapDispatchToProps)(Navigation);