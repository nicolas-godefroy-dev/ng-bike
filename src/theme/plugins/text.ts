import { plugin } from "twrnc"

export const text = plugin(({ addUtilities }) => {
  addUtilities({
    "text-neutral": "text-neutral-800 dark:text-neutral-50",
    "text-error": "text-error-900 dark:text-error-300",
    "text-success": "text-success-500 dark:text-success-50",
  })
})
