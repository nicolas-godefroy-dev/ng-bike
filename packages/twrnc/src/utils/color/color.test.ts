import { color } from './color';

describe('color', () => {
  it('returns theme color when a valid token is provided', () => {
    expect.hasAssertions();

    const validToken = 'primary-500';
    const result = color(validToken);

    expect(result).toStrictEqual(expect.any(String));
  });

  it('throws an error when an invalid token is provided', () => {
    expect.hasAssertions();

    const invalidToken = 'invalid';
    const errorFunction = () => color(invalidToken);

    expect(errorFunction).toThrow('Color not found in theme');
  });
});
