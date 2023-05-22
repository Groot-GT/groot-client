import { atom } from 'recoil';
import { defaultMagnifyAmount } from '../constants/magnify';

const MagnifyAmountState = atom<number>({
  key: 'drawingPageMagnifyState',
  default: defaultMagnifyAmount,
});

export default MagnifyAmountState;
