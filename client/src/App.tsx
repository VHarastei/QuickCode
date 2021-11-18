import { Layout } from 'components/Layout';
import { PrivateRoute } from 'components/PrivateRoute';
import { Account } from 'pages/Account';
import { Home } from 'pages/Home';
import { Lesson } from 'pages/Lesson';
import { Lessons } from 'pages/Lessons';
import { Profile } from 'pages/Profile';
import { Sections } from 'pages/Sections';
import { Text } from 'pages/Text';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { useAppDispatch } from 'store/hooks';
import { fetchGetMe } from 'store/slices/userSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGetMe());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <PrivateRoute path="/lessons/:sectionId/:lessonId">
          <Lesson />
        </PrivateRoute>
        <PrivateRoute path="/lessons/:sectionId">
          <Lessons />
        </PrivateRoute>
        <Route path="/lessons">
          <Sections />
        </Route>
        <PrivateRoute path="/profile">
          <Profile />
        </PrivateRoute>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/text">
          <Text />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
