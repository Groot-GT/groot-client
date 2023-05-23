import styled from 'styled-components';

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixins.subtitle1}
`;

export const ProjectSortOptionPanelWrapper = styled.div`
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DropdownWrapper = styled.div`
  width: 160px;
  margin-left: 16px;
`;
