import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useElementPosistion from 'src/hooks/useElementPosition';
import nodeState from 'src/recoil/nodeState';
import { RootVariant } from 'src/constants/node';
import LineContainer from 'src/components/organisms/LineContainer';
import BothSideRoot from './BothSideRoot';
import * as s from './style';

const ROOT_ID = 0;
const WIDTH = window.innerWidth * 0.9;
const HEIGHT = window.innerHeight * 0.9;

interface RootProps {
  rootVariant: RootVariant;
}

const Root = ({ rootVariant }: RootProps) => {
  const { children } = useRecoilValue(nodeState)[ROOT_ID];
  const { ref, position } = useElementPosistion<HTMLDivElement>();

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
          childrenNodes={children}
          position={position}
        />
      </s.Wrapper>
      <LineContainer width={WIDTH} height={HEIGHT} />
    </s.Background>
  );
};

export default Root;
