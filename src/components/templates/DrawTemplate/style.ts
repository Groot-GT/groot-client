import styled from 'styled-components';

export const DrawTemplateWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 19px 31px;
  background-color: ${({ theme }) => theme.colors.black[2]};
`;

export const SideWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
`;
