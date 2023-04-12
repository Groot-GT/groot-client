import { ReactNode } from 'react';
import { NodeChildren } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import Node from 'src/components/organisms/Node';
import * as s from './style';

interface BothSideRootProps {
  rootNode: ReactNode;
  childrenNodes: NodeChildren;
}

const BothSideRoot = ({ rootNode, childrenNodes }: BothSideRootProps) => (
  <>
    <s.Column>
      {childrenNodes.map(
        (id, index) =>
          !!(index % 2) && (
            <Node key={id} nodeId={id} direction={NodeDirection.left} />
          ),
      )}
    </s.Column>

    {rootNode}

    <s.Column>
      {childrenNodes.map(
        (id, index) =>
          !(index % 2) && (
            <Node key={id} nodeId={id} direction={NodeDirection.right} />
          ),
      )}
    </s.Column>
  </>
);

export default BothSideRoot;
