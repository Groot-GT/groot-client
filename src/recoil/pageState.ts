import { atom } from 'recoil';
import { pageInfo } from '../mock';
import { Pages } from '../types/page';

const pageState = atom<Pages>({
  key: 'pageState',
  default: pageInfo,
});

export default pageState;
