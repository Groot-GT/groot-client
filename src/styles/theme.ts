// 1rem = 16px
const fontSizes = {
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
    0: '#FBF6E5',
    1: '#FFD99F',
    2: '#5B4E3A',
  },
  red: {
    0: '#FBECEE',
    1: '#FFBCC6',
    2: '#76454C',
  },
  purple: {
    0: '#F2E8F4',
    1: '#E6B2F0',
    2: '#623C69',
  },
  violet: {
    0: '#EAEBF5',
    1: '#BBC0F4',
    2: '#363B6A',
  },
  blue: {
    0: '#E7F2FA',
    1: '#A6D6F9',
    2: '#2C495F',
  },
  green: {
    0: '#F1F6EB',
    1: '#C9E3AA',
    2: '#516C31',
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
