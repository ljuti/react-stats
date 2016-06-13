import API from '../../services/api';

import * as actionTypes from '../actionTypes/platforms';

export function fetchPlatformStatistics(platform) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_PLATFORM_STATISTICS
    });

    API.fetchPlatformStatistics(platform)
    .then((response) => {
      dispatch(fetchPlatformStatisticsSuccess(response));
    })
  }
}

function fetchPlatformStatisticsSuccess(data) {
  return (dispatch) => {
    dispatch({
      type: actionTypes.FETCH_PLATFORM_STATISTICS_SUCCESS,
      payload: data
    });
  }
}
