import { Station } from '../types';

/**
 * Sanitize station name
 */
export const sanitizeStation = (station: Station) => ({
  ...station,
  name: station.name
    .replace('-', '')
    .replace(`0${station.stationId}`, '')
    .replace(station.stationId, '')
    .trim(),
});
