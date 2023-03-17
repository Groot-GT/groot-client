import { useRecoilValue } from 'recoil';
import useElementPosistion from 'src/hooks/useElementPosition';
import nodeState from 'src/recoil/nodeState';
import { RootVariant } from 'src/constants/node';
import BothSideRoot from './BothSideRoot';
import * as s from './style';
import LineContainer from '../LineContainer';

const ROOT_ID = 0;

interface RootProps {
  rootVariant: RootVariant;
}

const Root = ({ rootVariant }: RootProps) => {
  const { children } = useRecoilValue(nodeState)[ROOT_ID];
  const { ref, position } = useElementPosistion<HTMLDivElement>();

  if (rootVariant === RootVariant.OTHER) {
    return null;
  }

  const rootNode = <s.Node ref={ref}>ROOT</s.Node>;

  return (
    <s.Background width={2000} height={1000}>
      <s.Wrapper>
        <BothSideRoot
          rootNode={rootNode}
          childrenNodes={children}
          position={position}
        />
      </s.Wrapper>
      <LineContainer width={2000} height={1000} />
    </s.Background>
  );
};

export default Root;
