import { plugin } from 'twrnc';

export const text = plugin(({ addUtilities }) => {
  addUtilities({
    'text-neutral': 'text-neutral-900 dark:text-neutral-50',
    'text-danger': 'text-danger-900 dark:text-danger-300',
    'text-success': 'text-success-500 dark:text-success-50',
  });
});
