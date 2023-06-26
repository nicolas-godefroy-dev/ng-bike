import { create } from 'twrnc';

import { shadow } from './plugins/shadow';
import { surface } from './plugins/surface';
import { text } from './plugins/text';
import { typography } from './plugins/typography';

const config = require('@ng-bike/tailwind-config');

export const tw = create({
  ...config,
  plugins: [typography, shadow, surface, text],
});
