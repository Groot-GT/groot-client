import styled from 'styled-components';

type GapProps = {
  height?: number;
}

export const Gap = styled.div<GapProps>`
  width: 100%;
  height: ${({ height }) => `${height}px` || '32px'};
`;
