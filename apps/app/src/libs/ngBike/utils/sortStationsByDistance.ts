import { Station } from '../types';

/**
 * Sort stations by distance
 */
export const sortStationsByDistance = (a: Station, b: Station) => a.distance - b.distance;
