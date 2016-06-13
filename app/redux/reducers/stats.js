import * as actionTypes from '../actionTypes/stats';

const initialState = {
  fetching: false,
  stats: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_PLATFORM_TOTALS:
      return {
        ...state,
        fetching: true
      }
    case actionTypes.FETCH_PLATFORM_TOTALS_SUCCESS:
      const platformTotals = state.stats
      return {
        ...state,
        stats: platformTotals
      }
  }
}
