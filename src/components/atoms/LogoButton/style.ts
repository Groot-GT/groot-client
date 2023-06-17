import styled from 'styled-components';

export const LogoButton = styled.button<{ bgTransparent: boolean }>`
  display: flex;
  place-items: center;
  height: 2rem;
  border: none;
  background-color: ${({ theme, bgTransparent }) =>
    bgTransparent ? 'transparent' : theme.colors.black[0]};
`;
