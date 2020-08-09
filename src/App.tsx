import React, { FC } from 'react';
import { Layout } from 'antd';
import { hot } from 'react-hot-loader/root';
import { Link, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/Home';
import PostPage from './pages/PostPage';

const { Content } = Layout;

const App: FC = () => {
  return (
    <Layout>
      <Navigation time="Mon-Fri: 9:00-19:00; Sat: 10:00-17:00; Sun: Closed" address="73 Harvey Forest Suite, New York" />
      <Content>
        <Switch>
          <Route exact path="/">
            <HomePage text="Community Center" />
          </Route>
          <Route path="/post">
            <PostPage text="" />
          </Route>
        </Switch>
      </Content>
      <Link to="/">Home</Link>
      <Link to="/post">PostPage</Link>
    </Layout>
  );
};

export default hot(App);
