import { atom } from 'recoil';
import { NodeId, NodeLine } from 'src/types/node';

interface LineState {
  [key: NodeId]: NodeLine;
}

const lineState = atom<LineState>({
  key: 'lineState',
  default: {},
});

export default lineState;
