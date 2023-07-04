import { Coordinate, distance } from '@ng-bike/utils';

import { Station, ValidStation } from '../types';

/**
 * Add the distance to the station
 */
export const addStationDistance = (station: ValidStation, point: Coordinate): Station => {
  const distanceInMeters = distance(
    {
      latitude: station.lat,
      longitude: station.lon,
    },
    point,
  );

  const stationWithDistance = {
    ...station,
    distance: distanceInMeters,
  };

  return stationWithDistance;
};
