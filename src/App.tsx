import { Layout } from 'components/Layout';
import { Landing } from 'pages/Landing';
import { Lessons } from 'pages/Lessons';
import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/lessons/:section/:id">id section lesson</Route>
        <Route path="/lessons/:section">section lesson</Route>
        <Route path="/lessons">
          <Lessons />
        </Route>
        <Route path="/profile">profile</Route>
        <Route path="/signin">sign in</Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
