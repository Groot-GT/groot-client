import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import lineState from 'src/recoil/lineState';
import { NodeId, NodeRef } from 'src/types/node';

const useLineCreation = ({ nodeId, ref }: { nodeId: NodeId; ref: NodeRef }) => {
  const setLine = useSetRecoilState(lineState);

  useEffect(() => {
    setLine((prevLines) => {
      if (prevLines[nodeId]) {
        return prevLines;
      }
      const newLines = { ...prevLines };
      newLines[nodeId] = ref;
      return newLines;
    });
  }, [nodeId, ref, setLine]);
};

export default useLineCreation;
