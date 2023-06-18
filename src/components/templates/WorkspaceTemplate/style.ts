import styled from 'styled-components';

export const WorkspaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding: 19px 31px;
  background: ${({ theme }) => `
    radial-gradient(100% 100% at 50% 120%,${theme.colors.main['1']}, ${theme.colors.main['0']})
  `};
`;

export const LayerWrapper = styled.div`
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
