import styled from 'styled-components';

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
