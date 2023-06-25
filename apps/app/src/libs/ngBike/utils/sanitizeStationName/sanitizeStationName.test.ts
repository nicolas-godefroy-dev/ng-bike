import { sanitizeStationName } from './sanitizeStationName';
import { ValidStation } from '../../types';

describe('sanitizeStationName', () => {
  it('should sanitize station name correctly', () => {
    const station = {
      stationId: '123',
      name: 'ABC-0123-XYZ',
    } as ValidStation;

    const sanitizedStation = sanitizeStationName(station);

    expect(sanitizedStation.name).toEqual('ABCXYZ');
  });
});
