export type Coordinate = {
  latitude: number;
  longitude: number;
};

/**
 * Converts numeric degrees to radians
 */
const toRad = (value: number) => {
  return (value * Math.PI) / 180;
};

/**
 * Get distance in meters
 */
export const distance = (coord1: Coordinate, coord2: Coordinate): number => {
  const R = 6371; // km
  const dLat = toRad(coord2.latitude - coord1.latitude);
  const dLon = toRad(coord2.longitude - coord1.longitude);
  const lat1 = toRad(coord1.latitude);
  const lat2 = toRad(coord2.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return Math.round(d * 1000);
};
