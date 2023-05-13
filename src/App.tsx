import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Route as _Route } from 'src/constants/routes';
import Workspace from './components/pages/Workspace';
import Draw from './components/pages/Draw';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App = () => (
  <RecoilRoot>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path={_Route.HOME} element={<Draw />} />
          <Route path={_Route.WORKSPACE} element={<Workspace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </RecoilRoot>
);

export default App;
