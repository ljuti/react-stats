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
      console.dir(action);
      // const platformTotals = [{
      //   android: action.payload.android,
      //   ios: action.payload.ios,
      //   'windows-phone': action.payload['windows-phone']
      // }]
      const platformTotals = [
        {
          platform: 'android',
          total: action.payload.android
        },
        {
          platform: 'ios',
          total: action.payload.ios
        },
        {
          platform: 'windows',
          total: action.payload['windows-phone']
        }
      ]

      return {
        ...state,
        stats: platformTotals
      }
    default:
      return state;
  }
}
