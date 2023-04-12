import { useEffect, useMemo, useRef } from 'react';
import { useRecoilState } from 'recoil';
import produce from 'immer';
import nodeState from 'src/recoil/nodeState';
import { NodeId } from 'src/types/node';
import getElementPosition from 'src/utils/getElementPosition';

const useNodeRef = (nodeId: NodeId) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [nodes, setNode] = useRecoilState(nodeState);

  const nodeCount = useMemo(() => Object.keys(nodes).length, [nodes]);

  useEffect(() => {
    setNode((prevNodes) =>
      produce(prevNodes, (draft) => {
        const position = getElementPosition(ref);
        draft[nodeId] = { ...draft[nodeId], position };
        return draft;
      }),
    );
  }, [nodeId, setNode, nodeCount]);

  return ref;
};

export default useNodeRef;
