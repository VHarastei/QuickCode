import { Layout } from 'components/Layout';
import { Home } from 'pages/Home';
import { Lesson } from 'pages/Lesson';
import { Lessons } from 'pages/Lessons';
import { Sections } from 'pages/Sections';
import React from 'react';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/lessons/:sectionId/:lessonId">
          <Lesson />
        </Route>
        <Route path="/lessons/:sectionId">
          <Lessons />
        </Route>
        <Route path="/lessons">
          <Sections />
        </Route>
        <Route path="/profile">
          <div>profile page</div>
        </Route>
        <Route path="/signin">
          <div>signin page</div>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
