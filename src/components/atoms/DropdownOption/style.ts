import styled, { DefaultTheme } from 'styled-components';

type OptionProps = {
  theme: DefaultTheme;
}

export const Option = styled.div<OptionProps>`
  padding: 8px 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[2]};
    cursor: pointer;
  }
;
`;
