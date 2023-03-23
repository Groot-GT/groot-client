import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Root from './components/organisms/Root';
import { RootVariant } from './constants/node';
import theme from './styles/theme';

const App = () => (
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={{ theme }}>
      <Root rootVariant={RootVariant.BOTH_SIDE} />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
