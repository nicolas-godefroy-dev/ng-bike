import { distance } from './distance';

describe('distance', () => {
  it('should return the right distance', () => {
    expect.hasAssertions();

    const meters = distance(
      {
        latitude: 49.42576540125409,
        longitude: 1.076303569768087,
      },
      {
        latitude: 49.44502075927551,
        longitude: 1.0897458860138753,
      },
    );

    expect(meters).toBe(2351);
  });
});
