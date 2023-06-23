import keyBy from 'lodash/keyBy';
import merge from 'lodash/merge';
import values from 'lodash/values';

import { useLocationStore } from '@hooks/useLocationStore';
import { sortStationsByDistance, useStationsQuery, Station, sanitizeStation } from '@libs/ngBike';

export const useStations = () => {
  const { userLocation } = useLocationStore();
  const { data, ...restQueryResult } = useStationsQuery<Station[]>(undefined, {
    refetchInterval: 1000 * 60, // 1 minute
    select: (res) => {
      const stations = values(
        merge(
          keyBy(res.stationInformation?.data.stations, 'stationId'),
          keyBy(res.stationStatus?.data.stations, 'stationId')
        )
      )
        .filter((station): station is Station => !!station)
        .map((station) => sanitizeStation(station));

      return sortStationsByDistance(stations, userLocation);
    },
  });

  return {
    stations: data ?? [],
    ...restQueryResult,
  };
};
