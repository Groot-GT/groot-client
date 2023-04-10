import styled from 'styled-components';

interface ButtonStyleProps {
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}


export const Button = styled.button<ButtonStyleProps>`
  background-color: ${({ theme, variant }) =>
          variant === 'primary' ? theme.colors.white[0] : theme.colors.main[1]};
  color: ${({ theme }) => theme.colors.main[1]};

  border: none;
  min-height: 2rem;
  min-width: 2rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${({ theme, variant }) =>
            variant === 'primary' ? theme.colors.main[0] : theme.colors.main[1]};
    color: ${({ theme }) => theme.colors.white[0]};
  }
`;
