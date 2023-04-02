import { useEffect, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import nodeState from 'src/recoil/nodeState';
import { RootVariant } from 'src/constants/node';
import LineContainer from 'src/components/organisms/LineContainer';
import BothSideRoot from './BothSideRoot';
import * as s from './style';

const ROOT_ID = 0;
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

interface RootProps {
  rootVariant: RootVariant;
}

const Root = ({ rootVariant }: RootProps) => {
  const nodes = useRecoilValue(nodeState);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(WIDTH / 7, HEIGHT / 7);
  }, []);

  if (rootVariant === RootVariant.OTHER) {
    return null;
  }

  const rootNode = <s.Node ref={ref}>ROOT</s.Node>;

  return (
    <s.Background width={WIDTH} height={HEIGHT}>
      <s.Wrapper>
        <BothSideRoot
          rootNode={rootNode}
          childrenNodes={nodes[ROOT_ID].children}
          parentRef={ref}
        />
      </s.Wrapper>
      <LineContainer width={WIDTH} height={HEIGHT} />
    </s.Background>
  );
};

export default Root;
