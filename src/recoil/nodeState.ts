import { atom } from 'recoil';
import { Node } from 'src/types/node';
import nodeInfo from '../mock';

const nodeState = atom<Node>({
  key: 'nodeState',
  default: nodeInfo,
});

export default nodeState;
