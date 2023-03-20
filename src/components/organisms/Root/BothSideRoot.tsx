import { ReactNode } from 'react';
import { NodeChildren, NodePosition } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import Node from 'src/components/organisms/Node';
import * as s from './style';

interface BothSideRootProps {
  rootNode: ReactNode;
  childrenNodes: NodeChildren;
  position: NodePosition;
}

const BothSideRoot = ({
  rootNode,
  childrenNodes,
  position,
}: BothSideRootProps) => (
  <>
    <s.Column>
      {childrenNodes.map(
        (id, index) =>
          !!(index % 2) && (
            <Node
              key={id}
              nodeId={id}
              parentPosition={position}
              direction={NodeDirection.left}
            />
          ),
      )}
    </s.Column>

    {rootNode}

    <s.Column>
      {childrenNodes.map(
        (id, index) =>
          !(index % 2) && (
            <Node
              key={id}
              nodeId={id}
              parentPosition={position}
              direction={NodeDirection.right}
            />
          ),
      )}
    </s.Column>
  </>
);

export default BothSideRoot;
