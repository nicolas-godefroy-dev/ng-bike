import { tw } from '../../twrnc.config';

/**
 * Overwrite the default color function to throw an error if the color is not found in the theme
 */
export const color = (token: string): string => {
  const themeColor = tw.color(token);

  if (!themeColor) throw new Error(`Color not found in theme`);
  return themeColor;
};
