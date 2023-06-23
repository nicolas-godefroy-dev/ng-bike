import { Coordinate, distance } from '@ng-bike/utils';

import { Station } from '../types';

/**
 * Sort stations by distance
 */
export const sortStationsByDistance = (stations: Station[], point: Coordinate): Station[] => {
  const sorter = (a: Station, b: Station) =>
    distance(
      {
        latitude: a.lat,
        longitude: a.lon,
      },
      point
    ) -
    distance(
      {
        latitude: b.lat,
        longitude: b.lon,
      },
      point
    );

  return stations.sort(sorter);
};
