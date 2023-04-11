import styled, { DefaultTheme } from 'styled-components';

type OptionProps = {
  theme: DefaultTheme;
}

export const Option = styled.div<OptionProps>`
  padding: 6px 4px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[2]};
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 16px;
`;

export const DropdownIconWrapper = styled.div`
  margin-right: 8px;
  background-color: ${({ theme }) => theme.colors.black[4]};
  padding: 4px;
  border-radius: 4px;
`;
