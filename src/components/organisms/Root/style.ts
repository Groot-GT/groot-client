import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 30px;
  zindex: 1;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Node = styled.div`
  padding: 10px;
  background: chartreuse;
`;
