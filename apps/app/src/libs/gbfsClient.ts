import keyBy from 'lodash/keyBy';
import merge from 'lodash/merge';
import values from 'lodash/values';

import { Coordinate, distance } from '@ng-bike/utils';

/**
 * GBFS specifications
 * @see https://github.com/NABSA/gbfs/blob/master/gbfs.md
 */
const GBFS_BASE_URL = 'https://transport.data.gouv.fr/gbfs/rouen';

export type StationInformation = {
  address: string;
  capacity: number;
  lat: number;
  lon: number;
  name: string;
  station_id: string;
};

export type StationStatus = {
  is_installed: number;
  is_renting: number;
  is_returning: number;
  last_reported: number;
  num_bikes_available: number;
  num_docks_available: number;
  station_id: string;
};

export type Station = StationInformation & StationStatus;

const sanitizeStation = (station: Station) => ({
  ...station,
  name: station.name
    .replace('-', '')
    .replace(`0${station.station_id}`, '')
    .replace(station.station_id, '')
    .trim(),
});

/**
 * Describes the capacity and rental availability of a stations.
 */
const getStationStatus = async (): Promise<StationStatus[]> => {
  const res = await fetch(`${GBFS_BASE_URL}/station_status.json`);
  const data = await res.json();

  if (!Array.isArray(data.data.stations)) {
    throw new Error('invalid station_status.json');
  }

  return data.data.stations as StationStatus[];
};

/**
 * Stations location information
 */
const getStationInformation = async (): Promise<StationInformation[]> => {
  const res = await fetch(`${GBFS_BASE_URL}/station_information.json`);
  const data = await res.json();

  if (!Array.isArray(data.data.stations)) {
    throw new Error('invalid station_information.json');
  }

  return data.data.stations as StationInformation[];
};

/**
 * Describes the capacity and rental availability of a stations and their location information
 */
const getStations = async (): Promise<Station[]> => {
  const stationStatus = await getStationStatus();
  const stationInformation = await getStationInformation();

  // Merge stationStatus and stationInformation by station_id
  const stations = values(
    merge(keyBy(stationStatus, 'station_id'), keyBy(stationInformation, 'station_id'))
  ).map(sanitizeStation);

  return stations as Station[];
};

/**
 * Sort stations by distance
 */
const sortStationsByDistance = (stations: Station[], point: Coordinate): Station[] => {
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

export { getStations, getStationStatus, getStationInformation, sortStationsByDistance };
