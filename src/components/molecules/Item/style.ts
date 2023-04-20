import styled from 'styled-components';
import theme from '../../../styles/theme';

type ItemProps = {
  backgroundColor?: string;
}


export const Item = styled.div<ItemProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || theme.colors.black[2]};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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


