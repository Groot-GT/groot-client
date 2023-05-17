import styled from 'styled-components';

export const BoardsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleWrapper = styled.div`
  ${({ theme }) => theme.mixins.subtitle1}
`;

export const OptionsWrapper = styled.div`
  max-width: 80%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
