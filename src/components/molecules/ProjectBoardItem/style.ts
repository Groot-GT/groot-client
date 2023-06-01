import styled from 'styled-components';

export const ProjectBoardItemWrapper = styled.div<{
  isGridLayout: boolean;
}>`
  ${({ theme }) => theme.mixins.shadow};
  background-color: ${({ theme }) => theme.colors.white[0]};
  width: 100%;
  border-radius: 8px;
  border: none;
  margin: 7px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  :hover {
    cursor: pointer;
  }
`;

export const ProjectBoardItem = styled.div`
  width: 100%;
  padding: 18px 12px 18px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectTitle = styled.div`
  ${({ theme }) => theme.mixins.title}
`;

export const ProjectDatePhrase = styled.div`
  ${({ theme }) => theme.mixins.body2}
`;

export const ProjectSettings = styled.div`
  display: flex;
  flex-direction: row;
`;
