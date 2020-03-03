
const colors = {
  blue: '#34a8ed',
  biscay: '#183862',
  viridian: '#4e957b',
  rawSienna: '#cb8543',
  pomegranate: '#f44336',

  white: '#f0f0f0',
  dark: '#202020',
  gray: '#4f4f4f',
  lightGray: '#686868',
};

const semantics = {
  primary: colors.blue,
  info: colors.biscay,
  success: colors.viridian,
  warning: colors.rawSienna,
  danger: colors.pomegranate,
};

export default {
  getColor: (name = 'royalBlue', modifier = (c) => c) => modifier({
    ...colors,
    ...semantics,
    text: colors.gray,
  }[name]),
};
