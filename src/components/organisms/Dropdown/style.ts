import styled from 'styled-components';

type DropdownListProps = {
  width: number | undefined;
};

export const DropdownWrapper = styled.div`
  height: fit-content;
  font-size: 12px;
  width: 100%;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: bold;
`;

export const SelectedItemPlaceHolder = styled.div<{
  borderNone: boolean | undefined;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4px 0 8px;
  width: 100%;
  border: 1px solid
    ${({ theme, borderNone }) =>
      borderNone === true ? 'transparent' : theme.colors.black[2]};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const DropdownListWrapper = styled.div<DropdownListProps>`
  background-color: ${({ theme }) => theme.colors.white[0]};
  ${({ theme }) => theme.mixins.shadow};
  position: absolute;
  width: ${({ width }) => width}px;
  z-index: 100;
  border-radius: 4px;
`;

export const SelectedIconWrapper = styled.div`
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.black[4]};
  padding: 4px;
  border-radius: 4px;
`;

export const SelectedItemWrapper = styled.div`
  width: 100%;
`;

export const DropdownIconWrapper = styled.div`
  padding: 4px;
  border-radius: 4px;
`;
