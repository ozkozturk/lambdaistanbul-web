import React, { FC } from 'react';
import { Layout } from 'antd';
import { hot } from 'react-hot-loader/root';

const { Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Content>
        liw
      </Content>
    </Layout>
  );
};

export default hot(App);
