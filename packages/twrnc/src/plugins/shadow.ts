import { Platform } from 'react-native';
import { plugin } from 'twrnc';

const base = {
  sm: {
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.025,
    elevation: 1,
  },
  base: {
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.075,
    elevation: 2,
  },
  md: {
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 3,
    shadowOpacity: 0.125,
    elevation: 3,
  },
  lg: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 8,
  },
  xl: {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.19,
    shadowRadius: 20,
    elevation: 12,
  },
  '2xl': {
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 30,
    elevation: 16,
  },
  none: {
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    shadowOpacity: 0,
    elevation: 0,
  },
};

const light = {
  'shadow-sm-light': {
    ...base.sm,
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.025)' : '#000',
  },
  'shadow-base-light': {
    ...base.base,
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.075)' : '#000',
  },
  'shadow-md-light': {
    ...base.md,
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.125)' : '#000',
  },
  'shadow-lg-light': {
    ...base.lg,
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.15)' : '#000',
  },
  'shadow-xl-light': {
    ...base.xl,
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.19)' : '#000',
  },
  'shadow-2xl-light': {
    ...base['2xl'],
    shadowColor: Platform.OS === 'android' ? 'rgba(0, 0, 0, 0.25)' : '#000',
  },
};

const dark = {
  'shadow-sm-dark': {
    ...base.sm,
    shadowColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.025)' : '#fff',
  },
  'shadow-base-dark': {
    ...base.base,
    shadowColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.075)' : '#fff',
  },
  'shadow-md-dark': {
    ...base.md,
    shadowColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.125)' : '#fff',
  },
  'shadow-lg-dark': {
    ...base.lg,
    shadowColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.15)' : '#fff',
  },
  'shadow-xl-dark': {
    ...base.xl,
    shadowColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.19)' : '#fff',
  },
  'shadow-2xl-dark': {
    ...base['2xl'],
    shadowColor: Platform.OS === 'android' ? 'rgba(255, 255, 255, 0.25)' : '#fff',
  },
};

export const shadow = plugin(({ addUtilities }) => {
  addUtilities({
    ...light,
    ...dark,
    // Dark mode helpers
    'shadow-none': base.none,
    'shadow-sm': 'shadow-sm-light dark:shadow-sm-dark',
    'shadow-base': 'shadow-base-light dark:shadow-base-dark',
    'shadow-md': 'shadow-md-light dark:shadow-md-dark',
    'shadow-lg': 'shadow-lg-light dark:shadow-lg-dark',
    'shadow-xl': 'shadow-xl-light dark:shadow-xl-dark',
    'shadow-2xl': 'shadow-2xl-light dark:shadow-2xl-dark',
  });
});
