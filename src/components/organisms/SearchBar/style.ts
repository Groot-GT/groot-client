import styled from 'styled-components';

export const Searchbar = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 0;
  padding: 0 10px;
  font-size: 14px;

  &:focus {
    outline: none;
    caret-color: ${({ theme }) => theme.colors.green[1]};
  }
`;

export const SearchBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const SearchResultWrapper = styled.div`
  width: 100%;
`;
