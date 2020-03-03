import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import store from './store';
import GlobalFonts from './styles/GlobalStyle';
import theme from './styles/theme';
import App from './components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('example'),
);
