import styled from 'styled-components';

type ColorPanelProps = {
  color: string;
}
export const ColorPanel = styled.div<ColorPanelProps>`
  ${({ theme }) => theme.mixins.flexCenterRow};
  ${({ theme }) => theme.mixins.body2};
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white[0]};

  :hover {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.black[6]};
  }
`;
