import { plugin } from 'twrnc';

export const surface = plugin(({ addUtilities }) => {
  addUtilities({
    'surface-base': 'bg-white dark:bg-neutral-900',
    'surface-50': 'bg-neutral-100 dark:bg-neutral-750',
    'surface-100': 'bg-neutral-100 dark:bg-neutral-700',
    'surface-200': 'bg-neutral-700 dark:bg-neutral-700',
    'surface-300': 'bg-neutral-700 dark:bg-neutral-700',
  });
});
