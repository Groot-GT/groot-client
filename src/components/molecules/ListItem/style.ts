import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  height: 48px;
  padding: 0 18px;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[2]};
    transition: background-color 0s ease-in-out;
  }
`;

export const ListItemTitle = styled.p`
  font-size: 12px;
`;


