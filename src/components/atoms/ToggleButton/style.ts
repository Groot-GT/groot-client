import styled, { DefaultTheme } from 'styled-components';

interface ToggleButtonStyleProps {
  theme: DefaultTheme;
  clicked: boolean | undefined;
}

export const ToggleButton = styled.button<ToggleButtonStyleProps>`
  display: flex;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.black[0]};
`;
