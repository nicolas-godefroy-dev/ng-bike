import { color } from './color';

describe('color', () => {
  test('returns theme color when a valid token is provided', () => {
    const validToken = 'primary-500';
    const result = color(validToken);

    expect(result).toEqual(expect.any(String));
  });

  test('throws an error when an invalid token is provided', () => {
    const invalidToken = 'invalid';
    const errorFunction = () => color(invalidToken);

    expect(errorFunction).toThrowError('Color not found in theme');
  });
});
