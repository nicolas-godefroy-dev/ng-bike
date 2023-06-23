export type Station = {
  capacity: number;
  address: string | null;
  lat: number;
  lon: number;
  name: string;
  shortName: string | null;
  stationId: string;
  numBikesAvailable: number;
  numDocksAvailable: number;
};
