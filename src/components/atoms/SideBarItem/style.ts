import styled, { DefaultTheme } from 'styled-components';

type SideBarItemStyleProps = {
  theme: DefaultTheme;
};

export const SideBarItemWrapper = styled.div<SideBarItemStyleProps>`
  padding: 6px 18px;
  font-size: 12px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;
