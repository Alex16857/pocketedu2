const palette = {
  darkGray: '#333333',
  offWhite: '#f1f2eb',
  lightGray: '#fff',
  sage: '#000',
  purple: '#9b5de5',
};

export default {
  light: {
    text: palette.darkGray,
    background: palette.offWhite,
    card: palette.lightGray,
    accent: palette.sage,
    primary: palette.purple,
    tint: palette.purple,
    tabIconDefault: palette.lightGray,
    tabIconSelected: palette.purple,
  },
  dark: {
    text: palette.offWhite,
    background: palette.darkGray,
    card: palette.lightGray,
    accent: palette.sage,
    primary: palette.purple,
    tint: palette.purple,
    tabIconDefault: palette.lightGray,
    tabIconSelected: palette.purple,
  },
};
