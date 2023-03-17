import { useRecoilValue } from 'recoil';
import lineState from 'src/recoil/lineState';
import { NodeLine } from 'src/types/node';
import * as s from './style';

interface LineContainerProps {
  width: number;
  height: number;
}

const LineContainer = ({ width, height }: LineContainerProps) => {
  const lineInfo = useRecoilValue(lineState);
  const lines: NodeLine[] = Object.values(lineInfo);

  return (
    <s.Container width={width} height={height}>
      {lines.map(({ x, y, parentX, parentY }) => (
        <s.Line key={`${x}${y}`} x1={parentX} y1={parentY} x2={x} y2={y} />
      ))}
    </s.Container>
  );
};

export default LineContainer;
