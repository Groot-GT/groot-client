import styled from 'styled-components';

export const ProjectPanel = styled.div`
  ${({ theme }) => theme.mixins.borderCurved};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 230px;
  height: 48px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.black[0]};
`;

export const ProjectName = styled.p`
  font-size: 1rem;
`;
