import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import { ConfigProvider } from 'antd';
import { ApolloProvider } from '@apollo/client';
import App from './App';
import { theme } from './theme';
import client from './state/client';
import './assets/styles/style.less';

const appRoot = document.getElementById('app');

render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ConfigProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ConfigProvider>
    </ApolloProvider>
  </BrowserRouter>,
  appRoot,
);
