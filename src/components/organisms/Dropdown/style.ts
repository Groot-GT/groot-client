import styled, { DefaultTheme } from 'styled-components';

interface DropdownListWrapperProps {
  width: number | undefined;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  theme: DefaultTheme;
}

export const DropdownWrapper = styled.div`
  margin: 0;
  width: 100%;
`;

export const DropdownTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const DropdownListWrapper = styled.div<DropdownListWrapperProps>`
  position: absolute;
  width: ${({ width }) => width}px;
  border: 1px solid ${({ theme }) => theme.colors.black[1]};
  z-index: 100;
  box-shadow: ${({ theme }) => theme.mixins.shadow};
`;
