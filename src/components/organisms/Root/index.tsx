import { useRecoilValue } from 'recoil';
import useElementPosistion from 'src/hooks/useElementPosition';
import nodeState from 'src/recoil/nodeState';
import { RootVariant } from 'src/constants/node';
import BothSideRoot from './BothSideRoot';
import * as s from './style';

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
    <s.Wrapper>
      <BothSideRoot
        rootNode={rootNode}
        children={children}
        position={position}
      />
    </s.Wrapper>
  );
};

export default Root;
