import styled from 'styled-components';

export const ProjectBoardItemWrapper = styled.div<{
  isGridLayout: boolean;
}>`
  ${({ theme }) => theme.mixins.title}
  background-color: ${({ theme }) => theme.colors.white[0]};
  width: 100%;
  margin: 0 0 4px 0;
  border-radius: 8px;
  padding-left: 8px;
`;

export const ProjectBoardItem = styled.div`
  display: flex;
`;
