import React, { FC } from 'react';
import { Layout } from 'antd';
import { hot } from 'react-hot-loader/root';
import AppButton from './components/common/Button';
import Navigation from './components/Navigation';

const { Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Navigation text="navigation" />
      <Content>
        <AppButton text="liw" />
      </Content>
    </Layout>
  );
};

export default hot(App);
