import { Layout } from 'components/Layout';
import { Landing } from 'pages/Landing';
import { Lesson } from 'pages/Lesson';
import { Lessons } from 'pages/Lessons';
import { Sections } from 'pages/Sections';
import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/lessons/:section/:id">
          <Lesson />
        </Route>
        <Route path="/lessons/:section">
          <Lessons />
        </Route>
        <Route path="/lessons">
          <Sections />
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
