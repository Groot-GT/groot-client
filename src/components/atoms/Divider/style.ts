import styled, { DefaultTheme } from 'styled-components';

type DividerProps = {
  theme: DefaultTheme;
  length?: number;
  thickness?: number;
  vertical?: boolean;
  color?: string;
};

export const DividerLine = styled.div<DividerProps>`
  ${({ thickness, length, vertical }) => {
    if (vertical === true) {
      return `
        width: ${thickness}px;
        height: ${length}%;
        `;
    }
    return `
        width: ${length}%;
        height: ${thickness}px;
        `;
  }}
  background-color: ${({ color, theme }) => color || theme.colors.black[4]};
`;
