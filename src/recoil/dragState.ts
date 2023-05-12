import { atom } from 'recoil';
import { NodeId } from 'src/types/node';

const dragState = atom<NodeId | null>({
  key: 'dropState',
  default: null,
});

export default dragState;
