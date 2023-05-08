import styled from 'styled-components';

export const CurrentUsersPanelWrapper = styled.div`
  padding: 0 32px;
  ${({ theme }) => theme.mixins.flexCenterRow};
  display: flex;
  flex-direction: row;
`;

export const UsersPanelDividerWrapper = styled.div`
  ${({ theme }) => theme.mixins.flexCenterRow};
  width: 36px;
  height: 100%;
`;
