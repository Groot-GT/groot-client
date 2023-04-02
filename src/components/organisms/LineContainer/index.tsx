import { useRecoilValue } from 'recoil';
import lineState from 'src/recoil/lineState';
import { NodeLine } from 'src/types/node';
import getElementPosition from 'src/utils/getElementPosition';
import * as s from './style';

interface LineContainerProps {
  width: number;
  height: number;
}

const LineContainer = ({ width, height }: LineContainerProps) => {
  const lineInfo = useRecoilValue(lineState);
  const lines: NodeLine[] = Object.values(lineInfo);

  return (
    <s.Container viewBox={`0 0 ${width} ${height}`}>
      {lines.map(({ ref, parentRef }) => {
        const { x, y } = getElementPosition(ref);
        const { x: parentX, y: parentY } = getElementPosition(parentRef);

        return (
          <s.Line key={`${x}${y}`} x1={parentX} y1={parentY} x2={x} y2={y} />
        );
      })}
    </s.Container>
  );
};

export default LineContainer;
