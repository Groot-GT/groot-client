import styled, { DefaultTheme } from 'styled-components';

type OptionProps = {
  theme: DefaultTheme;
};

export const Option = styled.div<OptionProps>`
  padding: 6px 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.black[2]};
    cursor: pointer;
  }
`;

export const DropdownIconWrapper = styled.div`
  margin-right: 8px;
  border-radius: 4px;
  width: 20px;
  height: 20px;
`;
