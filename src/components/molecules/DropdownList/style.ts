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
  ${({ theme }) => theme.mixins.body1};
`;
