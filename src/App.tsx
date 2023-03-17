import { RecoilRoot } from 'recoil';
import Node from './components/organisms/Node';
import { NodeDirection } from './constants/node';

const App = () => (
  <RecoilRoot>
    <Node
      nodeId={1}
      direction={NodeDirection.right}
      parentPosition={{ x: 0, y: 0 }}
    />
  </RecoilRoot>
);

export default App;
