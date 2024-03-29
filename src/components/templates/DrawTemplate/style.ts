import styled from 'styled-components';

export const DrawTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 19px 31px;
  background-color: ${({ theme }) => theme.colors.black[2]};
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 16px 0;
`;

export const TopRightWrapper = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: row;
`;

export const MiddleWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SideWrapper = styled.div`
  z-index: 2;
`;
