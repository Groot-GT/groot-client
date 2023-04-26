import nodeState from 'src/recoil/nodeState';
import { useRecoilState } from 'recoil';

const useNodesData = () => {
  const [nodes, setNodes] = useRecoilState(nodeState);
  return { nodes, setNodes };
};

export default useNodesData;
