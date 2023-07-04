import { formatDistance } from './formatDistance'; // assuming the function is in formatDistance file

describe('formatDistance', () => {
  it('formats small distances in meters', () => {
    expect.hasAssertions();

    expect(formatDistance(500)).toBe('500 m');
    expect(formatDistance(999)).toBe('999 m');
  });

  it('formats large distances in kilometers', () => {
    expect.hasAssertions();

    expect(formatDistance(1000)).toBe('1 km');
    expect(formatDistance(1500)).toBe('2 km'); // rounding up due to lack of decimal places
    expect(formatDistance(10000)).toBe('10 km');
  });

  it('handles zero', () => {
    expect.hasAssertions();

    expect(formatDistance(0)).toBe('0 m');
  });
});
