const meterFormatter = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'meter',
  unitDisplay: 'short',
  maximumFractionDigits: 0,
});

const kilometerFormatter = new Intl.NumberFormat('en-US', {
  style: 'unit',
  unit: 'kilometer',
  unitDisplay: 'short',
  maximumFractionDigits: 0,
});

/**
 * Formats a distance in meters or kilometers.
 *
 * @param {number} distance The distance in meters.
 * @return {string} The formatted distance.
 */

export const formatDistance = (distance: number) => {
  if (distance < 1000) {
    return meterFormatter.format(distance);
  }

  return kilometerFormatter.format(distance / 1000);
};
