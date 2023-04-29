import styled from 'styled-components';

type ColorPanelProps = {
  color: string;
}
export const ColorPanel = styled.div<ColorPanelProps>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${({ color }) => color};

  :hover {
    cursor: pointer;
  }
`;
