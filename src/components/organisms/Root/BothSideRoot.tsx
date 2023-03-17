import { ReactNode } from 'react';
import { NodeChildren, NodePosition } from 'src/types/node';
import { NodeDirection } from 'src/constants/node';
import Node from 'src/components/organisms/Node';
import * as s from './style';

interface BothSideRootProps {
  rootNode: ReactNode;
  children: NodeChildren;
  position: NodePosition;
}

const BothSideRoot = ({ rootNode, children, position }: BothSideRootProps) => (
  <>
    <s.Column>
      {children.map(
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
      {children.map(
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
