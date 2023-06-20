import { plugin } from 'twrnc';

export const typography = plugin(({ addUtilities }) => {
  addUtilities({
    'text-caption2': {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 11,
      lineHeight: 13,
    },
    'text-caption1': {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    'text-footnote': {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 13,
      lineHeight: 18,
    },
    'text-subheadline': {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 15,
      lineHeight: 20,
    },
    'text-callout': {
      fontFamily: 'OpenSans_600SemiBold',
      fontSize: 16,
      lineHeight: 21,
    },
    'text-body': {
      fontFamily: 'OpenSans_400Regular',
      fontSize: 17,
      lineHeight: 22,
    },
    'text-headline': {
      fontFamily: 'OpenSans_700Bold',
      fontSize: 17,
      lineHeight: 22,
    },
    'text-title4': {
      fontFamily: 'OpenSans_700Bold',
      fontSize: 20,
      lineHeight: 24,
    },
    'text-title3': {
      fontFamily: 'OpenSans_700Bold',
      fontSize: 22,
      lineHeight: 28,
    },
    'text-title2': {
      fontFamily: 'OpenSans_700Bold',
      fontSize: 28,
      lineHeight: 34,
    },
    'text-title1': {
      fontFamily: 'OpenSans_700Bold',
      fontSize: 34,
      lineHeight: 41,
    },
  });
});
