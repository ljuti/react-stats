import * as actionTypes from '../actionTypes/platforms';

const initialState = {
  fetching: false,
  stats: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.FETCH_PLATFORM_STATISTICS:
      return {
        ...state,
        fetching: true
      }
    case actionTypes.FETCH_PLATFORM_STATISTICS_SUCCESS:
      const platformStatistics = []
      const platformTotal = action.payload.total;
      const other = {
        key: 'other',
        value: action.payload.other
      }

      delete action.payload.total;
      delete action.payload.other;

      for (var property in action.payload) {
        platformStatistics.push({
          key: property,
          value: action.payload[property]
        });
      }

      platformStatistics.push(other);

      return {
        ...state,
        stats: platformStatistics,
        total: platformTotal
      }
    default:
      return state;
  }
}
