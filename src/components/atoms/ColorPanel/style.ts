import styled from 'styled-components';

type ColorPanelProps = {
  color: string;
  size: number | undefined;
};
export const ColorPanel = styled.div<ColorPanelProps>`
  ${({ theme }) => theme.mixins.flexCenterRow};
  ${({ theme }) => theme.mixins.body2};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size}px`};
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white[0]};

  :hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.black[5]};
  }
`;
