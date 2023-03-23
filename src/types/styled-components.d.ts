import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      subtitle1: string;
      subtitle2: string;
      body1: string;
      body2: string;
      overline: string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      bold: number;
    };
    colors: {
      main: {
        primary: string;
        secondary: string;
        tertiary: string;
      };
      white: {
        0: string;
      };
      black: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
      };
      red: {
        1: string;
        2: string;
      };
      blue: {
        1: string;
        2: string;
      };
      yellow: {
        1: string;
        2: string;
      };
      green: {
        1: string;
        2: string;
      };
    };
    mixins: {
      flexCenter: string;
      flexCenterColumn: string;
      felxCenterRow: string;
      subtitle1: string;
      subtitle2: string;
      body1: string;
      body2: string;
      overline: string;
    };
  }
}
