import { plugin } from 'twrnc';

export const text = plugin(({ addUtilities }) => {
  addUtilities({
    'text-neutral': 'text-neutral-900 dark:text-neutral-50',
    'text-error': 'text-error-500',
    'text-success': 'text-success-500',
  });
});
