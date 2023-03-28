import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
// import Root from './components/organisms/Root';
// import { RootVariant } from './constants/node';
import theme from './styles/theme';
import Button from './components/atoms/Button';
import ToggleButton from './components/atoms/ToggleButton';

const App = () => (
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {/* <Root rootVariant={RootVariant.BOTH_SIDE} /> */}
      <Button>Example Button</Button>
      <ToggleButton onClick={(e) => console.log(e)} />
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
