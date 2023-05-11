import styled from 'styled-components';

type ItemProps = {
  backgroundColor?: string;
}


export const Item = styled.div<ItemProps>`
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.colors.black[2]};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin: 0;
  height: 48px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[2]};
  }
`;

export const ItemTitle = styled.p`
  font-size: 12px;
`;


