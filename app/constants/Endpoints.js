export const BASE_URL = 'http://localhost:2300/';

export const PLATFORM_TOTALS = BASE_URL + 'api/stats/';

export function PLATFORM_STATS(platform) {
  return PLATFORM_TOTALS + platform;
}
