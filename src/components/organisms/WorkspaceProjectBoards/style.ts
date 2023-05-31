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
