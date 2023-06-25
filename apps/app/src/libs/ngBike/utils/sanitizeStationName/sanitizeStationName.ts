import { ValidStation } from '../../types';

/**
 * Sanitize station name
 */
export const sanitizeStationName = (station: ValidStation) => ({
  ...station,
  name: station.name
    .replaceAll('-', '')
    .replaceAll(`0${station.stationId}`, '')
    .replaceAll(station.stationId, '')
    .trim(),
});
