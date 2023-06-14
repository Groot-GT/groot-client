import styled from 'styled-components';

export const ProjectBoardListItemWrapper = styled.div`
  ${({ theme }) => theme.mixins.shadow};
  background-color: ${({ theme }) => theme.colors.white[0]};
  width: 100%;
  border-radius: 8px;
  border: none;
  //margin: 7px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  :hover {
    cursor: pointer;
  }
`;

export const ProjectBoardGridItemWrapper = styled.div`
  ${({ theme }) => theme.mixins.shadow};
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  min-width: 240px;
  height: 240px;
  border-radius: 8px;
  border: none;
  display: flex;
  flex-wrap: wrap;

  :hover {
    cursor: pointer;
  }

  :first-child {
    margin-left: 0;
  }
`;

export const ProjectBoardListItem = styled.div`
  width: 100%;
  padding: 18px 12px 18px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectBoardGridItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 18px 16px;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr;
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
