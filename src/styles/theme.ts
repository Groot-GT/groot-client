// 1rem = 16px
const fontSizes = {
  title: '1.4rem',
  subtitle1: '1.25rem',
  subtitle2: '1rem',
  body1: '1rem',
  body2: '0.875rem',
  overline: '0.75rem',
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
};

const nodeColors = {
  yellow: {
    background: '#FBF6E5',
    root: '#FFD99F',
    text: '#5B4E3A',
  },
  red: {
    background: '#FBECEE',
    root: '#FFBCC6',
    text: '#76454C',
  },
  purple: {
    background: '#F2E8F4',
    root: '#E6B2F0',
    text: '#623C69',
  },
  violet: {
    background: '#EAEBF5',
    root: '#BBC0F4',
    text: '#363B6A',
  },
  blue: {
    background: '#E7F2FA',
    root: '#A6D6F9',
    text: '#2C495F',
  },
  green: {
    background: '#F1F6EB',
    root: '#C9E3AA',
    text: '#516C31',
  },
};

const colors = {
  main: {
    0: '#E7F6F4',
    1: '#00AC83',
    2: '#00776E',
  },
  white: {
    0: '#FFFFFF',
  },
  black: {
    0: '#FFFFFF',
    1: '#F0F0F0',
    2: '#E6E6E6',
    3: '#D1D1D1',
    4: '#BEBEBE',
    5: '#969696',
    6: '#6F6F6F',
    7: '#464646',
    8: '#1E1E1E',
  },
  red: {
    1: '#FA6464',
    2: '#FA5050',
  },
  blue: {
    1: '#648CDC',
    2: '#4C79D3',
  },
  yellow: {
    1: '#FFDC6C',
    2: '#FACD3C',
  },
  green: {
    1: '#36C081',
    2: '#21B478',
  },
  background: {
    green: '#2DC99E',
  },
};

const titleColors = {
  ...nodeColors,
  main: {
    0: '#E7F6F4',
    1: '#00AC83',
    2: '#00776E',
  },
};

const mixins = {
  borderCurved: `
    border-radius: 5px;
  `,
  shadow: `
    0px 4px 6px rgba(0, 0, 0, 0.15)
  `,
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterRow: `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  `,
  title: `
    font-size: ${fontSizes.title};
    font-weight: ${fontWeights.regular};
    `,
  subtitle1: `
    font-size: ${fontSizes.subtitle1};
    font-weight: ${fontWeights.regular};
    `,
  subtitle2: `
    font-size: ${fontSizes.subtitle2};
    font-weight: ${fontWeights.medium};
    `,
  body1: `
    font-size: ${fontSizes.body1};
    font-weight: ${fontWeights.regular};
    `,
  body2: `
    font-size: ${fontSizes.body2};
    font-weight: ${fontWeights.regular};
    `,
  overline: ` 
    font-size: ${fontSizes.overline};
    font-weight: ${fontWeights.regular};
    `,
};

const theme = {
  fontSizes,
  fontWeights,
  colors,
  titleColors,
  nodeColors,
  mixins,
};

export default theme;
