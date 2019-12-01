export const ADD_CRYPTOCURRENCIES = 'ADD_CRYPTOCURRENCIES';
export const SET_CAPITALIZATION = 'SET_CAPITALIZATION';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_TOP_100: 'SHOW_TOP_100',
  SHOW_TOP_50: 'SHOW_TOP_50',
  SHOW_TOP_10: 'SHOW_TOP_10'
}

export function addCryptocurrencies(cryptocurrencies) {
  return { type: ADD_CRYPTOCURRENCIES, cryptocurrencies }
}

export function setCapitalization(cap) {
  return { type: SET_CAPITALIZATION, capitalization: cap }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}