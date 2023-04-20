import styled, { DefaultTheme } from 'styled-components';

type SideBarItemStyleProps = {
  theme: DefaultTheme;
};

export const SideBarItemWrapper = styled.div<SideBarItemStyleProps>`
  width: 100%;
  padding: 6px 18px;
  //height: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SideBarItemTitle = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;
