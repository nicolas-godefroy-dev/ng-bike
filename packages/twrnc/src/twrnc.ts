import { TwConfig, create } from 'twrnc';

import { shadow } from './plugins/shadow';
import { surface } from './plugins/surface';
import { text } from './plugins/text';
import { typography } from './plugins/typography';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('@ng-bike/tailwind-config') as TwConfig;

export const tw = create({
  ...config,
  plugins: [typography, shadow, surface, text],
});
