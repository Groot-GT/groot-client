import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
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

export const ListItemTitle = styled.p`
  font-size: 12px;
`;


