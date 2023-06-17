import styled from 'styled-components';

export const IconButton = styled.button<{ padding: string | undefined }>`
  padding: ${({ padding }) => padding ?? '1px 6px'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 0;
  background-color: transparent;
`;
