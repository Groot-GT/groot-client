import { atom } from 'recoil';
import nodeInfo from '../mock';

const nodeState = atom({
  key: 'nodeState',
  default: nodeInfo,
});

export default nodeState;
