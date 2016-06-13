import * as URL from '../constants/Endpoints';
import request from 'reqwest';
import Q from 'q';

export default class API {
  fetchPlatformTotals() {
    const deferred = Q.defer();
    request({
      url: URL.PLATFORM_TOTALS,
      method: 'GET',
      headers: null,
      success: function(response) {
        deferred.resolve(response);
      },
      error: function(error) {
        deferred.reject(response);
      }
    });
    return deferred.promise;
  }
}
