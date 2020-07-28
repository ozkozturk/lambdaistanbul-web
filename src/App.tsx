import React, { FC } from 'react';
import { Layout } from 'antd';
import { hot } from 'react-hot-loader/root';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';

const { Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Navigation time="Mon-Fri: 9:00-19:00; Sat: 10:00-17:00; Sun: Closed" address="73 Harvey Forest Suite, New York" />
      <Content>
        <HomePage text="Community Center" />
      </Content>
    </Layout>
  );
};

export default hot(App);
