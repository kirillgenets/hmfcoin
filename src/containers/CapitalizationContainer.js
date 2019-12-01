import { connect } from 'react-redux';
import { setCapitalization } from '../store/actions.js';
import Capitalization from '../components/Capitalization/Capitalization.js';

function mapDispatchToProps(dispatch) {
  return {
    setCapitalization: cap => dispatch(setCapitalization(cap))
  }
}

export default connect(undefined, mapDispatchToProps)(Capitalization);