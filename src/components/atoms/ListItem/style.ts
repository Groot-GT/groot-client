import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  height: 48px;
  padding: 0 18px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[2]};
  }
`;

export const ListItemTitle = styled.p`
  font-size: 12px;
`;


