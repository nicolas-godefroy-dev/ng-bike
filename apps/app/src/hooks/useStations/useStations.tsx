import keyBy from 'lodash/keyBy';
import merge from 'lodash/merge';
import values from 'lodash/values';

import { useLocationStore } from '@/hooks/useLocationStore';
import {
  sortStationsByDistance,
  useStationsQuery,
  Station,
  sanitizeStationName,
  addStationDistance,
  ValidStation,
} from '@/libs/ngBike';

export const useStations = () => {
  const { userLocation } = useLocationStore();
  const { data, ...restQueryResult } = useStationsQuery<Station[]>(undefined, {
    queryKey: ['stations'],
    refetchInterval: 1000 * 60, // 1 minute
    select: (res) => {
      const stations = values(
        merge(
          keyBy(res.stationInformation?.data.stations, 'stationId'),
          keyBy(res.stationStatus?.data.stations, 'stationId'),
        ),
      )
        .filter((station): station is ValidStation => !!station)
        .map(sanitizeStationName)
        .map((station) => addStationDistance(station, userLocation))
        .sort(sortStationsByDistance);

      return stations;
    },
  });

  return {
    stations: data ?? [],
    ...restQueryResult,
  };
};
