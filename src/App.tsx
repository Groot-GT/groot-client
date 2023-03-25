import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Draw from './components/pages/Draw';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
// import Button from './components/atoms/Button';
// import ToggleButton from './components/atoms/ToggleButton';

const App = () => (
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Draw />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
