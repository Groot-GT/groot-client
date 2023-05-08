import styled from 'styled-components';

export const ProjectPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 230px;
  height: 48px;
  border-radius: 5px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.black[0]};
`;

export const ProjectName = styled.p`
  font-size: 1rem;
`;
