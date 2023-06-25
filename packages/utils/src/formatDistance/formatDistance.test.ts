import { formatDistance } from './formatDistance'; // assuming the function is in formatDistance file

describe('formatDistance', () => {
  test('formats small distances in meters', () => {
    expect(formatDistance(500)).toBe('500 m');
    expect(formatDistance(999)).toBe('999 m');
  });

  test('formats large distances in kilometers', () => {
    expect(formatDistance(1000)).toBe('1 km');
    expect(formatDistance(1500)).toBe('2 km'); // rounding up due to lack of decimal places
    expect(formatDistance(10000)).toBe('10 km');
  });

  test('handles zero', () => {
    expect(formatDistance(0)).toBe('0 m');
  });
});
