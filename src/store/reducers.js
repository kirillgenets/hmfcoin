import { combineReducers } from 'redux'
import {
  ADD_CRYPTOCURRENCIES,
  SET_CAPITALIZATION,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions.js'

const { SHOW_TOP_10 } = VisibilityFilters;

function cryptocurrencies(state = [], action) {
  switch (action.type) {
    case ADD_CRYPTOCURRENCIES:
      return [...state, action.cryptocurrencies];
      break;
    default:
      return state;
      break;
  }
}

function capitalization(state = 0, action) {
  switch (action.type) {
    case SET_CAPITALIZATION:
      return action.capitalization;
      break;
    default:
      return state;
      break;
  }
}

function visibilityFilter(state = SHOW_TOP_10, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
      break;
    default:
      return state;
      break;
  }
}

const cryptoTracker = combineReducers({
  cryptocurrencies,
  capitalization,
  visibilityFilter
})

export default cryptoTracker;