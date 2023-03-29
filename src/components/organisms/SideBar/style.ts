import styled, { DefaultTheme } from 'styled-components';

interface SideBarStyleProps {
  theme: DefaultTheme;
}

export const SideBar = styled.div<SideBarStyleProps>`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 230px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white[0]};
`;
