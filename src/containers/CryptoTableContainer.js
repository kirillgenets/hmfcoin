import { connect } from 'react-redux';
import { addCryptocurrencies, VisibilityFilters } from '../store/actions.js';
import CryptoTable from '../components/CryptoTable/CryptoTable.js';

function getVisibleCryptocurrencies(cryptocurrencies, filter) {
  switch (filter) {
    case VisibilityFilters.SHOW_TOP_100:
      return cryptocurrencies;
    case VisibilityFilters.SHOW_TOP_50:
      return cryptocurrencies.slice(0, 50);
    case VisibilityFilters.SHOW_TOP_10:
      return cryptocurrencies.slice(0, 10);
    default:
      return cryptocurrencies;
  }
}

function mapStateToProps(state) {
  return {
    cryptocurrencies: getVisibleCryptocurrencies(state.cryptocurrencies, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addCryptocurrencies: cryptocurrencies => dispatch(addCryptocurrencies(cryptocurrencies))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CryptoTable);