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

export const GridSelectorWrapper = styled.div`
  padding: 0 6px;
  display: flex;
  flex-direction: row;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;

export const SelectedIconWrapper = styled.div<{ selected: boolean }>`
  width: 28px;
  height: 28px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.white[0] : `transparent`};
  border-radius: 4px;
`;
