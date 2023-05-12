import styled from 'styled-components';

type SideBarProps = {
  fullHeight?: boolean;
}

export const SideBar = styled.div<SideBarProps>`
  ${({ theme }) => theme.mixins.borderCurved};
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 230px;
  height: ${({ fullHeight }) => fullHeight ? '100%' : 'fit-content'};
  background-color: ${({ theme }) => theme.colors.white[0]};
`;

export const SideBarGap = styled.div`
  width: 100%;
  height: 32px;
`;

export const SearchModeWrapper = styled.div`
  width: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
`;
