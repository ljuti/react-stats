import API from '../../services/api';

import * as actionTypes from '../actionTypes/stats';

export function fetchPlatformTotals() {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_PLATFORM_TOTALS
    });

    API.fetchPlatformTotals()
    .then((response) => {
      const { data } = response;
      dispatch(fetchPlatformTotalsSuccess(data));
    })
  }
}

function fetchPlatformTotalsSuccess(data) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_PLATFORM_TOTALS_SUCCESS,
      payload: data
    });
  }
}
