import { create } from 'twrnc';

import { shadow } from './plugins/shadow';
import { surface } from './plugins/surface';
import { text } from './plugins/text';
import { typography } from './plugins/typography';
import theme from './tailwind.config';

export const tw = create({
  ...theme,
  plugins: [typography, shadow, surface, text],
});
