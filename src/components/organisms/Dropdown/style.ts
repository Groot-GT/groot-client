import styled from 'styled-components';

type DropdownListProps = {
  width: number | undefined;
}

export const DropdownListWrapper = styled.div<DropdownListProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.white[0]};
  width: ${({ width }) => width}px;
  z-index: 100;
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.mixins.shadow};
`;

export const SelectedItemPlaceHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 4px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.black[4]};
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
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

export const DropdownWrapper = styled.div`
  font-size: 12px;
  width: 100%;
  margin: 4px 0;
`;
