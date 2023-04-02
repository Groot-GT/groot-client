import { atom } from 'recoil';
import { NodeId, NodeRef } from 'src/types/node';

interface LineState {
  [key: NodeId]: NodeRef;
}

const lineState = atom<LineState>({
  key: 'lineState',
  default: {},
});

export default lineState;
