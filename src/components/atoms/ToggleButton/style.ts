import styled, { DefaultTheme } from 'styled-components';

interface ToggleButtonStyleProps {
  theme: DefaultTheme;
  clicked: boolean | undefined;
}

export const ToggleButton = styled.button<ToggleButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: transparent;
`;
