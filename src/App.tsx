import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Root from './components/organisms/Root';
import { RootVariant } from './constants/node';
import theme from './styles/theme';

const App = () => (
  <RecoilRoot>
    <ThemeProvider theme={{ theme }}>
      <Root rootVariant={RootVariant.BOTH_SIDE} />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
