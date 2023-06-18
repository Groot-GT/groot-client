import styled from 'styled-components';

type DropdownListProps = {
  width: number | undefined;
};

export const DropdownListWrapper = styled.div<DropdownListProps>`
  background-color: ${({ theme }) => theme.colors.white[0]};
  ${({ theme }) => theme.mixins.shadow};
  position: absolute;
  width: ${({ width }) => width}px;
  z-index: 100;
  border-radius: 4px;
`;

export const GroupName = styled.div`
  margin: 4px 0 2px 26px;
  padding: 4px 8px;
  color: ${({ theme }) => theme.colors.black[5]};
  font-size: inherit;
`;
