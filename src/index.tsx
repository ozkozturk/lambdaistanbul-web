import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { ConfigProvider } from 'antd';
import App from './App';
import { theme } from './theme';
import './assets/styles/style.less';

const appRoot = document.getElementById('app');

render(
  <BrowserRouter>
    <ConfigProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ConfigProvider>
  </BrowserRouter>,
  appRoot,
);
