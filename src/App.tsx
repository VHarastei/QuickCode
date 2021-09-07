import { Layout } from 'components/Layout';
import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="border border-red-500">
      <Switch>
        <Route path="/lessons/:theme/:id">theme lesson</Route>
        <Route path="/lessons">lessons</Route>
        <Route path="/profile">profile</Route>
        <Route path="/login">login</Route>
        <Route path="/register">register</Route>
        <Route path="/">
          <Layout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
