import { RecoilRoot } from 'recoil';
import Root from './components/organisms/Root';
import { RootVariant } from './constants/node';

const App = () => (
  <RecoilRoot>
    <Root rootVariant={RootVariant.BOTH_SIDE} />
  </RecoilRoot>
);

export default App;
