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
