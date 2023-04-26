import styled from 'styled-components';

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 230px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white[0]};
`;
