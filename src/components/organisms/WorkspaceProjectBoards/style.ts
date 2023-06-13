import styled from 'styled-components';

export const BoardsWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProjectBoardTitleWrapper = styled.div`
  margin: 12px 0;
  ${({ theme }) => theme.mixins.body2}
  color: ${({ theme }) => theme.colors.black[3]};
`;

export const ProjectBoardItemsWrapper = styled.div<{
  isGridLayout: boolean;
}>`
  width: 100%;
  display: ${({ isGridLayout }) => (isGridLayout ? 'grid' : 'flex')};
  flex-flow: row wrap;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));

  grid-gap: 27px;
  justify-content: space-between;
  flex-direction: ${({ isGridLayout }) => (isGridLayout ? 'row' : 'column')};

  ::after {
    content: '';
    flex: auto;
  }
`;
