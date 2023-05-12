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

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.main[0]};
    transition: background-color 0s ease-in-out;
  }


`;

export const ItemTitle = styled.p`
  font-size: 12px;
`;


