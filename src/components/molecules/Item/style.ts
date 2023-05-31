import styled from 'styled-components';

type ItemProps = {
  backgroundColor?: string;
  hoverColor?: string;
};

export const Item = styled.div<ItemProps>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.black[2]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  padding: 0;
  border-radius: inherit;
  justify-content: space-between;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme, hoverColor }) =>
      hoverColor || theme.colors.main[0]};
    transition: background-color 0s ease-in-out;
  }
`;
