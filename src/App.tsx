import { Layout } from 'components/Layout';
import { Landing } from 'pages/Landing';
import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/lessons/:theme/:id">theme lesson</Route>
        <Route path="/lessons">lessons</Route>
        <Route path="/profile">profile</Route>
        <Route path="/signin">sign in</Route>
        <Route path="/">
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
          <Landing />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
