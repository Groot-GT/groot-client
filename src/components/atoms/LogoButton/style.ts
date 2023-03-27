import styled, { DefaultTheme } from 'styled-components';

interface LogoButtonStyleProps {
  theme: DefaultTheme;
}

export const LogoButton = styled.button<LogoButtonStyleProps>`
  display: flex;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background-color: ${({ theme }) => theme.colors.black[0]};
`;
